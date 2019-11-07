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
import ImgMediaCard from './../molecules/Card';

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
            title={"HELLO WORLD"}
            buttonLabel={"ログイン"}
            onMenuClick={() => {
              this.setState({ menuOpen: !menuOpen });
            }}
          />
          <ImgMediaCard
            image={backImg}
            title={"HELLO WORLD"}
            text={"マニュアル 手引書、取扱説明書。本項で解説。 オートの反対の意味で、手動のこと。 自動車の運転方式の1つ、マニュアルトランスミッション。 カメラでのピントの合わせ方・マニュアルフォーカス。またそれ以外の露出やシャッター速度を、すべて手動で設定する事も指す。"}
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