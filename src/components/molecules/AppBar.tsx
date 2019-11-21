import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { default as MAppBar } from '@material-ui/core/AppBar';
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Badge,
  Paper,
  Popover,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Notifications as AlermIcon,
} from '@material-ui/icons';
import { theme } from './../theme';
import firebase from '../../firebase';
import { compose, defaultProps, lifecycle } from 'recompose';

interface Props {
  title: string,
  buttonLabel: string,
  onMenuClick: () => void,
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
        buttonLabel,
        onMenuClick,
      } = this.props;
      const {
        userData,
        open,
      } = this.state;

      console.log({
        userData
      });

      return (
        <div
          style={{
            flexGrow: 1,

          }}
        >
          <MAppBar
            position="static"
            style={{
              backgroundColor: theme.primaryColor,
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
                <Paper>
                  {"test"}
                </Paper>
              </Popover>
            </Toolbar>
          </MAppBar>
        </div>
      );
    }
  }
);

export default AppBar;