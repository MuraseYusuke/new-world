import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import GrayLayer from './../molecules/GrayLayer';
import Window from './../atoms/Window';
import MailButton from './../atoms/buttons/MailButton';
// import FanAny from './../../assets/fanany.jpg';
// import Miyasako from './../../assets/miyasako.jpg';
import Profile from './../organisms/Profile';
import MenuFab from './../molecules/MenuFab';
import firebase from './../../firebase';
import MyAccount from '../organisms/MyAccount';
import {
  Button,
  TextField
} from '@material-ui/core';
import {
  windowType
} from './../../types/windowType';
import { withRouter } from "react-router";
import Iframe from 'react-iframe';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    }

    this.handleBeforeUnload = this.handleBeforeUnload.bind(this);
  }

  componentWillMount() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  componentWillUnmount() {

    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }

  async componentDidMount() {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    const docRef = db.collection("user_infomation").doc(`${user.email}`);

    const doc = await docRef.get();
    const userData = doc.data();
    this.setState({ userData });
  }

  handleBeforeUnload(e) {
    e.preventDefault();

    e.returnValue = '未保存のデータがありますが、本当に閉じますか？'
  }

  onAddClick() {
    console.log(this.props.history);
    this.props.history.push("/ChangeProfile");
  }

  render() {

    const {
      userData,
    } = this.state;
    const {
      windows
    } = userData;

    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${backImg})`,
          backgroundSize: "cover",
        }}
      >
        <GrayLayer>
          <Button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
            onClick={() => firebase.auth().signOut()}
            variant="contained"
            color="primary"
          >
            {"sign out"}
          </Button>
          <MyAccount />
          {
            windows && windows.map((data, i) => {
              switch (data.type) {
                case windowType.normal:
                  return <Window
                    style={{
                      margin: "auto",
                      marginTop: 100,
                    }}
                    defaultX={data.defaultX}
                    defaultY={data.defaultY}
                    width={data.width}
                    height={data.height}
                    key={`${data.type}_${i}`}
                  >

                  </Window>
                case windowType.profile:
                  return <Window
                    style={{
                      margin: "auto",
                      marginTop: 100,
                    }}
                    defaultX={data.defaultX}
                    defaultY={data.defaultY}
                    width={data.width}
                    height={data.height}
                    enableResize={false}
                    key={`${data.type}_${i}`}
                  >
                    <Profile data={data} />
                  </Window>
                case windowType.email:
                  return <Window
                    key={`${data.type}_${i}`}
                  >
                    <MailButton />
                  </Window>
                default:
                  return null;
              }
            })
          }
          <Window
            width={500}
            height={500}
          >
            <Iframe
              url="https://voguegirl.jp/horoscope/shiitake/gemini/"
              width={"500px"}
              height={"500px"}
              id="id"
              position="relative"
            />
          </Window>
          <Window>
            <TextField 
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </Window>
        </GrayLayer>
        <MenuFab 
          onAddClick={() => this.onAddClick()}
        />
      </div>
    );
  }
};



export default withRouter(Home);
