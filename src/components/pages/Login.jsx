import React from 'react';
import SignIn from './../organisms/SignIn';
import { withRouter } from "react-router";
import firebase from './../../firebase';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handelLogin = this.handelLogin.bind(this);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      console.log({user});
      if(user){
        this.props.history.push('/Home');
      }
    })
  }

  async handleSignUp(email, password) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.history.push('/Home');
    }catch(error){
      alert(error);
    }
  }

  async handelLogin(email, password){
    console.log({
      email,
      password,
    })
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.history.push('/Home');
    }catch(error){
      alert(error);
    }
  }

  render() {
    return (
      <SignIn
       onLogin={this.handelLogin}
       onSignUp={this.handleSignUp}
      />
    );
  }
}

export default withRouter(Login);