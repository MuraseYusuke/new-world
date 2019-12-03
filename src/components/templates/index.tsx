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
    PersonOutline as OPerson
} from '@material-ui/icons';
import firebase from '../../firebase';
import { withRouter, RouteComponentProps } from "react-router";
import theme from './../theme';

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
    Personal,
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

    componentDidMount() {
        firebase.auth().onAuthStateChanged(userData => {
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

        console.log({
            userData
        })

        const ListItemList: ListItemListProps = {
            main: [
                {
                    authType: ListAuthType.normal,
                    title: 'ホーム',
                    iconType: IconType.Home,
                    onClick: () => {
                        history.push('/Home');
                    }
                },
                {
                    authType: ListAuthType.normal,
                    title: 'チャット',
                    iconType: IconType.Chat,
                    onClick: (state) => {
                        history.push('/ChatHome');
                    }
                },
                {
                    authType: ListAuthType.admin,
                    title: 'パーソナルデータ',
                    iconType: IconType.Personal,
                    onClick: () => {
                        history.push('/PersonalDataList');
                    }
                }
            ],
            sub: [
                {
                    authType: ListAuthType.normal,
                    title: 'ログアウト',
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
                    position: "relative",
                    minHeight: "calc(100vh - 50px)",
                    maxHeight: "calc(100vh - 50px)",
                    backgroundImage: `url(${backImg})`,
                    backgroundSize: "cover",
                    zIndex: -2,
                    fontFamily: theme.fontFamily,
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
                        {
                            userData ?
                                <FullList
                                    userData={userData}
                                    ListItemList={ListItemList}
                                />
                                :
                                null
                        }
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
    authType: ListAuthType,
    title: string,
    iconType: IconType,
    onClick: (option?: any) => void,
}

enum ListAuthType {
    admin = 0,
    normal,
}

interface FullListProps {
    userData: any;
    ListItemList: ListItemListProps;
}

const FullList = (props: FullListProps) => {
    const {
        ListItemList,
        userData,
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
                    case IconType.Personal:
                        return <OPerson />;
                    default:
                        return <SubjectIcon />;
                }
            })()}
        </div>
    );
}


export default withRouter(Template);