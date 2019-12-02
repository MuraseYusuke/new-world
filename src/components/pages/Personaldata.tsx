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
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {
            count.map(d => {
              return (
                <SimpleCard
                style={{
                  margin: 8,
                  minWidth: 360,
                }}
                  title={"タイトル"}
                  text={"テキスト"}
                  image={backImg}
                  onClick={() => {
                    alert("test");
                  }}
                />
              );
            })
          }
        </div>
      </Template>
    );
  }
};

export default withRouter(PersonalData);