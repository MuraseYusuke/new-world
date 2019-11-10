import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import { withRouter } from "react-router";
import ImgMediaCard from './../molecules/Card';
import firebase from './../../firebase';
import Template from './../templates';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {
      history
    } = this.props;

    return (
      <Template>
        <ImgMediaCard
          image={backImg}
          title={"HELLO WORLD"}
          text={"マニュアル 手引書、取扱説明書。本項で解説。 オートの反対の意味で、手動のこと。 自動車の運転方式の1つ、マニュアルトランスミッション。 カメラでのピントの合わせ方・マニュアルフォーカス。またそれ以外の露出やシャッター速度を、すべて手動で設定する事も指す。"}
        />
      </Template>
    );
  }
};

export default withRouter(Home);