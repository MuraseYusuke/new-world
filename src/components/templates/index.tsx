import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import GrayLayer from '../molecules/GrayLayer';
import AppBar from '../molecules/AppBar';
import {
    SwipeableDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core';
import {
    Mail as MailIcon,
    Chat as ChatIcon,
    MoveToInbox as InboxIcon,
    Subject as SubjectIcon,
    Home as HomeIcon,
} from '@material-ui/icons';
import firebase from '../../firebase';
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {
}

interface State {
    menuOpen: boolean,
    userData: any,
}

enum IconType {
    Home = 1,
    Chat,
    Inbox,
    Mail,
    LogOut,
}

class Template extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            menuOpen: false,
            userData: undefined,
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(userData => {
            console.log({userData});
            this.setState({ userData });
        })
    }

    render() {
        const {
            history,
            children
        } = this.props;
        const {
            menuOpen,
            userData,
        } = this.state;

        const ListItemList: ListItemListProps = {
            main: [
                {
                    title: 'Home',
                    iconType: IconType.Home,
                    onClick: () => {
                        history.push('/Home');
                    }
                },
                {
                    title: 'Chat',
                    iconType: IconType.Chat,
                    onClick: () => {
                        history.push('/ChatRoom');
                    }
                }
            ],
            sub: [
                {
                    title: 'LogOut',
                    iconType: IconType.LogOut,
                    onClick: () => {
                        firebase.auth().signOut();
                        history.push('/');
                    }
                }
            ]
        }

        return (
            <div
                style={{
                    minHeight: "100vh",
                    backgroundImage: `url(${backImg})`,
                    backgroundSize: "cover",
                    zIndex: -2,
                }}
            >
                <GrayLayer>
                    <AppBar
                        title={"HELLO WORLD"}
                        buttonLabel={"ログアウト"}
                        onMenuClick={() => {
                            this.setState({ menuOpen: !menuOpen });
                        }}
                    />
                    {children}
                    <SwipeableDrawer
                        open={menuOpen}
                        onOpen={() => {
                            this.setState({ menuOpen: true })
                        }}
                        onClose={() => {
                            this.setState({ menuOpen: false });
                        }}
                    >
                        <FullList
                            ListItemList={ListItemList}
                        />
                    </SwipeableDrawer>
                </GrayLayer>
            </div>
        );
    }
};

interface ListItemListProps {
    main: ListItems[],
    sub: ListItems[],
}

interface ListItems {
    title: string,
    iconType: IconType,
    onClick: () => void,
}

interface FullListProps {
    ListItemList: ListItemListProps
}

const FullList = (props: FullListProps) => {
    const {
        ListItemList,
    } = props;

    return (
        <div>
            <List>
                {
                    ListItemList && ListItemList.main.map((item, index) => {
                        return (
                            <ListItem
                                button
                                key={index}
                                onClick={() => {
                                    item.onClick();
                                }}
                                style={{
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                }}
                            >
                                <ListItemIcon>
                                    <ListIcon
                                        iconType={item.iconType}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        );
                    })
                }
            </List>
            <Divider />
            <List>
                {
                    ListItemList && ListItemList.sub.map((item, index) => {
                        return (
                            <ListItem
                                button
                                key={index}
                                onClick={() => {
                                    item.onClick();
                                }}
                            >
                                <ListItemIcon>
                                    <ListIcon
                                        iconType={item.iconType}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        );
                    })
                }
            </List>
        </div>

    );
}

interface ListIconProps extends Pick<ListItems, 'iconType'> {
}

const ListIcon = (props: ListIconProps) => {
    const {
        iconType,
    } = props;

    return (
        <div>
            {(() => {
                switch (iconType) {
                    case IconType.Inbox:
                        return <InboxIcon />;
                    case IconType.Home:
                        return (
                            <HomeIcon />
                        );
                    case IconType.Mail:
                        return <MailIcon />;
                    case IconType.Chat:
                        return (
                            <ChatIcon />
                        );
                    default:
                        return <SubjectIcon />;
                }
            })()}
        </div>
    );
}


export default withRouter(Template);