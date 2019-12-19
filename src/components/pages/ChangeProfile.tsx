import React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import Iframe from 'react-iframe';
import Template from './../templates';
import firebase from '../../firebase';

interface Props extends RouteComponentProps {

}

interface State {
    userData: any
}

class ChangeProfile extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            userData: undefined,
        }
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(userData => {
            this.setState({ userData });
        });
    }

    render(){
        return (
            <Template>

            </Template>
        )
    }
}

export default withRouter(ChangeProfile);