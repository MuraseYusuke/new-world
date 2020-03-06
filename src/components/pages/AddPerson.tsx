import * as React from 'react';
import './../../App.css';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import AddPersonInput from './../organisms/AddPersonInput';

interface Props extends RouteComponentProps {
}

class AddPerson extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {
            location
        } = this.props;
        return (
            <Template>
                <AddPersonInput
                    personals={location.state.personals}
                />
            </Template>

        );
    }
}

export default withRouter(AddPerson);