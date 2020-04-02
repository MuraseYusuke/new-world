import * as React from 'react';
import './../../App.css';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import firebase from './../../firebase';
import ImgMediaCard from './../molecules/Card';
import MenuFab from './../molecules/MenuFab';
import styled from 'styled-components';
import AddPersonInput from './../organisms/AddPersonInput';
import {
    Paper
} from '@material-ui/core';

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
                <Paper
                    style={{
                        margin: 16,
                        padding: 16,
                    }}
                >
                <AddPersonInput
                    personals={location.state.personals}
                />
                </Paper>
            </Template>

        );
    }
}

const RoomContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export default withRouter(AddPerson);