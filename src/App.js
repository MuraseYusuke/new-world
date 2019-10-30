import * as React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import firebase from './firebase';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true, authenticated: false, user: null };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;
    if (loading) return <p>loading..</p>;
    console.log({
      user: this.state.user,
      state:this.state,
      currentUser: this.state.currentUser
    })
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() =>
              authenticated === true ? (
                <Home />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={() =>
              authenticated === false ? (
                <Login />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </BrowserRouter>
    );
  }
};


export default App;