import React from 'react';
import SignIn from './../organisms/SignIn';
import { withRouter } from "react-router";
import firebase from './../../firebase';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginError: "",
    }

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handelLogin = this.handelLogin.bind(this);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.history.push('/Home');
      }
    })
    firebase.auth().currentUser.getIdToken(true).then(function(idToken){
      console.log({idToken});
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
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.history.push('/Home');
    }catch(error){
      this.setState({ loginError: "メールアドレスまたはパスワードが違います" })
    }
  }

  render() {
    const {
      loginError
    } = this.state;
    return (
      <SignIn
       onLogin={this.handelLogin}
       onSignUp={this.handleSignUp}
       error={loginError}
      />
    );
  }
}

export default withRouter(Login);