import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import { SimpleCard } from './../molecules/Card';
import Template from './../templates';
import { withRouter, RouteComponentProps } from "react-router";
import firebase from './../../firebase';
import {
  Fab,
} from '@material-ui/core';
import {
  Add,
} from '@material-ui/icons';

interface Props extends RouteComponentProps {

}

interface State {
  userData: any;
  personals?: PersonalDataProps[];
};

export interface PersonalDataProps {
  id: number;
  age: number;
  name: string;
  job: string;
  birthday: string;
  image: string;
  visit?: string;
  description: string;
  star: number;
  chartData?: { rank: string, value: number }[];
}

class PersonalDataList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userData: undefined,
      personals: [],
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(userData => {
      this.setState({ userData }, async () => {
        const db = firebase.firestore();
        const personalDataRef = db.collection('personal_data').doc(`${this.state.userData.email}`);
        const docs = await personalDataRef.get();
        const data = docs.data();
        if (data) this.setState({ personals: data.personals });

      })
    })
  }

  render() {
    const {
      personals
    } = this.state;
    const {
      history
    } = this.props;

    return (
      <Template>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {
            personals && personals.map((d, i) => {
              return (
                <SimpleCard
                  style={{
                    margin: "0 auto",
                    marginTop: 8,
                    minWidth: 360,
                  }}
                  title={d.name}
                  text={d.job}
                  image={d.image ? d.image : backImg}
                  star={d.star}
                  onClick={() => {
                    history.push({ pathname: '/PersonalData', state: { userData: d } });
                  }}
                  key={`userList_${i}`}
                />
              );
            })
          }
        </div>
        <Fab
          style={{
            position: "absolute",
            right: 16,
            bottom: 16,
          }}
          onClick={() => {
            history.push({ pathname: '/AddPerson', state: { personals: personals } });
          }}
        >
          <Add />
        </Fab>
      </Template>
    );
  }
};

export default PersonalDataList;