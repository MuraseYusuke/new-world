import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import GrayLayer from './../molecules/GrayLayer';
import AppBar from './../molecules/AppBar';
import { withRouter } from "react-router";

class Home extends React.Component {

  render() {

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
        />
        </GrayLayer>
      </div>
    );
  }
};



export default withRouter(Home);