import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import GrayLayer from './../molecules/GrayLayer';
import AppBar from './../molecules/AppBar';
import { withRouter } from "react-router";
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
  MoveToInbox,
} from '@material-ui/icons';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  render() {

    const {
      menuOpen
    } = this.state;
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
            title={"NEW WORLD"}
            buttonLabel={"ログイン"}
            onMenuClick={() => {
              this.setState({ menuOpen: !menuOpen });
            }}
          />
          <SwipeableDrawer
            open={menuOpen}
            onClose={() => {
              this.setState({ menuOpen: !menuOpen });
            }}
          >
            <FullList />
          </SwipeableDrawer>
        </GrayLayer>
      </div>
    );
  }
};


const FullList = () => {
  return (
    <div>
      <List>
        {
          ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
            return (
              <ListItem
                button
                key={index}
              >
                <ListItemIcon>
                  <MoveToInbox />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })
        }
      </List>
      <Divider />
      <List>
        {
          ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
            return (
              <ListItem
                button
                key={index}
              >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })
        }
      </List>
    </div>

  );
}


export default withRouter(Home);