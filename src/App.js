import * as React from 'react';
import firebase from './firebase';
import { withRouter } from "react-router";
import Routes from './Routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    console.log("app.jsx");
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
};


export default withRouter(App);