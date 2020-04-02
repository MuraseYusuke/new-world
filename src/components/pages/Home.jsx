import * as React from 'react';
import './../../App.css';
import { withRouter } from "react-router";
import Template from './../templates';
import MainMenu from './../molecules/MainMenu';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Template>
        <MainMenu />
      </Template>
    );
  }
};

export default withRouter(Home);