import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { default as MAppBar } from '@material-ui/core/AppBar';
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
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
  }> {
    constructor(props: Props) {
      super(props);
      this.state = {
        userData: undefined
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
        userData
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
                <AlermIcon />
              </IconButton>
              <Button
                color="inherit"
                onClick={() => {
                }}
                disableRipple={true}
              >
                <Avatar alt="user profile" src={userData && userData.photoURL} />
              </Button>
            </Toolbar>
          </MAppBar>
        </div>
      );
    }
  }
);

export default AppBar;