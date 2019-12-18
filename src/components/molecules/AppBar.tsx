import React from 'react';
import { default as MAppBar } from '@material-ui/core/AppBar';
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Badge,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Notifications as AlermIcon,
  Chat as ChatIcon,
} from '@material-ui/icons';
import theme from './../theme';
import firebase from '../../firebase';
import { compose, defaultProps } from 'recompose';

interface Props {
  title: string,
  buttonLabel: string,
  onMenuClick: () => void,
  onProfileChange: () => void,
}

const AppBar = compose<Props, Props>(
  defaultProps<Partial<Props>>({
    title: "NEW WORLD",
    buttonLabel: "ログアウト"
  }),
)(
  class AppBar extends React.Component<Props, {
    userData: any,
    open: boolean,
  }> {
    constructor(props: Props) {
      super(props);
      this.state = {
        userData: undefined,
        open: false,
      }
    }

    componentDidMount() {
      firebase.auth().onAuthStateChanged(userData => {
        this.setState({ userData });
      });
    }

    render() {
      const {
        title,
        onMenuClick,
        onProfileChange,
      } = this.props;
      const {
        userData,
        open,
      } = this.state;

      return (
        <div>
          <div
            style={{
              flexGrow: 1,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 100
            }}
          >
            <MAppBar
              position="static"
              style={{
                backgroundColor: theme.color.primaryColor,
              }}
            >
              <Toolbar>
                <IconButton
                  style={{
                    cursor: "pointer"
                  }}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => {
                    console.log("MenuOpen");
                    onMenuClick();
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  style={{
                    flexGrow: 1,
                  }}
                >
                  {title}
                </Typography>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => {
                    alert("tst");
                  }}
                >
                  <Badge
                    style={{
                      margin: 4,
                    }}
                    color={"primary"}
                    variant={"dot"}
                    invisible={false}
                  >
                    <AlermIcon />
                  </Badge>
                </IconButton>
                <Button
                  color="inherit"
                  onClick={() => {
                    this.setState({ open: true });
                  }}
                  disableRipple={true}
                >
                  <Avatar alt="user profile" src={userData && userData.photoURL} />
                </Button>
                <Popover
                  open={open}
                  onClose={() => {
                    this.setState({ open: false });
                  }}
                >
                  <List
                    style={{
                      padding: 8,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }}
                  >
                    <ListItemText primary={userData && userData.displayName} />
                    <ListItemText primary={userData && userData.email} />
                    <Divider />
                    <ListItem
                      button
                      key={"test"}
                      onClick={() => {
                      }}
                    >
                      <ListItemIcon>
                        <ChatIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={"アカウント設定"}
                        onClick={() => {
                          onProfileChange();
                        }}
                      />
                    </ListItem>
                  </List>
                </Popover>
              </Toolbar>
            </MAppBar>
          </div>
          <div style={{ width: "100%", height: 56 }} />
        </div>
      );
    }
  }
);

export default AppBar;