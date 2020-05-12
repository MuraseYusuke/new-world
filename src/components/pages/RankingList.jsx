import * as React from 'react';
import firebase from './../../firebase';
import Template from './../templates';
import { withRouter } from "react-router";

class RankingList extends React.Component {
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
    const testArray = [...Array(5).keys()];
    return (
      <Template>
        {
          testArray.map((d, i) => {
            return (
              <div
                style={{
                  
                }}
              >

              </div>
            );
          })
        }
        <div>RankingList</div>
      </Template>
    );
  }
};



export default withRouter(RankingList);