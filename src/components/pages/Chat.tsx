import * as React from 'react';
import './../../App.css';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';

interface Props extends RouteComponentProps {

}

interface State {
}

class Chat extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <Template>
                test
            </Template>

        );
    }
}


export default withRouter(Chat);