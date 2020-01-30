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

class Home extends React.Component {
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
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "inline-block",
              borderLeft: `1px solid ${theme.color.pureColor}`,
              borderRight: `1px solid ${theme.color.pureColor}`,
              paddingLeft: 2,
              paddingRight: 2,
              margin: 8,
            }}
          >
            <ImageBox
              src={Img}
              alt={"naru"}
              title={"naru"}
              style={{
                border: `1px solid ${theme.color.pureColor}`,
                marginTop: 4,
              }}
              imgStyle={{
                height: 50,
                width: 50,
              }}
            />
          </div>
          <ChatBabble 
            label={"てすとだよ"}
          />
        </div>
      </Template>
    );
  }
};



export default withRouter(Home);