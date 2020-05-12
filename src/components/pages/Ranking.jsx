import * as React from 'react';
import './../../App.css';
import { withRouter } from "react-router";
import Template from './../templates';
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