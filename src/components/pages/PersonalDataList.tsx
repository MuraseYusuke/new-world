import * as React from 'react';
import './../../App.css';
import backImg from './../../assets/background.jpg';
import { SimpleCard } from './../molecules/Card';
import Template from './../templates';
import { withRouter, RouteComponentProps } from "react-router";
import firebase from './../../firebase';

interface Props extends RouteComponentProps {

}

interface State{
    userData: any;
    personals?: PersonalDataProps[];
};

export interface PersonalDataProps {
    id: number;
    age: number;
    name: string;
    image: string;
    visit?: string;
    description: string;
}

class PersonalDataList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
        userData: undefined,
        personals: [],
    }
  }

  componentDidMount(){
      firebase.auth().onAuthStateChanged(userData => {
          this.setState({ userData }, async () => {
              console.log({
                  email: this.state.userData,
              })
              const db = firebase.firestore();
              const personalDataRef = db.collection('personal_data').doc(`${this.state.userData.email}`);
              const docs = await personalDataRef.get();
              const data = docs.data();
              if(data) this.setState({ personals: data.personals });

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
            personals && personals.map(d => {
              return (
                <SimpleCard
                style={{
                  margin: "0 auto",
                  marginTop: 8,
                  minWidth: 360,
                }}
                  title={d.name}
                  text={d.description}
                  image={d.image}
                  onClick={() => {
                    history.push({ pathname: '/PersonalData', state: { userData: d }});
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

export default withRouter(PersonalDataList);