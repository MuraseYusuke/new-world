import * as React from 'react';
import './../../App.css';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import AddPersonInput from './../organisms/AddPersonInput';
import { getFirebaseAuth } from '../../firebase';

interface Props extends RouteComponentProps {
}

class AddPerson extends React.Component<Props, {
    userData: any
}> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userData: undefined
        }
    }

    async getAuth(){
        return await getFirebaseAuth((userData: any) => {
            this.setState({ userData });
        });
    }

    componentDidMount(){
        this.getAuth();
    }

    render() {
        const {
            location
        } = this.props;
        const {
            userData
        } = this.state;
        return (
            <Template>
                <AddPersonInput
                    personals={location.state.personals}
                    userData={userData}
                />
            </Template>

        );
    }
}

export default withRouter(AddPerson);