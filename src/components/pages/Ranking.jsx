import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import { withRouter } from "react-router";
import ImgMediaCard from './../molecules/Card';
import Template from './../templates';
import ImageBox from './../atoms/ImageBox';
import Img from './../../assets/fanany.jpg';
import theme from './../theme';
import ChatBabble from './../atoms/ChatBabble';
import firebase from './../../firebase';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(userData => {
      this.setState({ userData }, async () => {


      });
    });
  }

  render() {

    return (
      <Template>
        <div>Ranking</div>
      </Template>
    );
  }
};



export default withRouter(Ranking);