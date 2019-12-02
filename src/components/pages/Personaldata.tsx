import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import { SimpleCard } from './../molecules/Card';
import Template from './../templates';
import { withRouter, RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {

}

class PersonalData extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
    }
  }

  render() {

    const count = Array(5).fill(0);

    return (
      <Template>
        <div
          style={{
            width: "calc(100vw - 16px)",
            height: "100vh",
            margin: 8,
            border: "1px solid white",
            borderRadius: 15,
          }}
        >

        </div>
      </Template>
    );
  }
};

export default withRouter(PersonalData);