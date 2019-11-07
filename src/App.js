import * as React from 'react';
// import { BrowserRouter, Route, Redirect } from "react-router-dom";
// import Login from './components/pages/Login';
// import Home from './components/pages/Home';
import firebase from './firebase';
import SignIn from './components/organisms/SignIn';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value: "",
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      console.log({
        user
      })
    })
  }

  render() {

    return (
      <SignIn 
        onClick={(email, password) => {
          console.log({
            email,
            password
          })
        }}
      />
    );
  }
};


export default App;