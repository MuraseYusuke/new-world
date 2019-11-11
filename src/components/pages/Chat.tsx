import * as React from 'react';
import './../../App.css';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    TextField,
    IconButton,
} from '@material-ui/core';
import {
    Send
} from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import Paper from './../molecules/Paper';
import { getChatData, setChatData } from './../utils/spreadsheet';
import firebase from './../../firebase';

interface Props extends RouteComponentProps {

}

interface State {
    text: string,
    chatLog: ChatValue[],
    userData: any,
}

interface ChatValue {
    name: string,
    text: string,
}

class Chat extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: "",
            chatLog: [],
            userData: undefined,
        }
    }

    async getData() {
        let room = "test";
        const db = firebase.firestore();
        const docRef = db.collection("chat").doc(`${room}`);

        const doc = await docRef.get();
        const data = doc.data();
        data && this.setState({ chatLog: data.chatLog });
    }

    async setData(value: ChatValue[], addValue: ChatValue) {
        let room = "test";
        const db = firebase.firestore();
        const docRef = db.collection("chat").doc(`${room}`);
        let updateSingle = docRef.update({ chatLog: [...value, addValue] }).then(data => {
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getData();
        firebase.auth().onAuthStateChanged(userData => {
            this.setState({ userData });
        });
    }

    componentWillReceiveProps(nextProps: Props, nextState: State){
    }

    render() {
        const {
            chatLog,
            text,
            userData
        } = this.state;

        return (
            <Template>
                {
                    <List>
                        {
                            chatLog && chatLog.map((d, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            color: "white"
                                        }}
                                    >
                                        <div>{d.name}</div>
                                        <div>{d.text}</div>
                                    </div>
                                );
                            })
                        }
                    </List>
                }
                <Paper
                    style={{
                        display: "flex",
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        alignItems: "center",
                    }}
                >
                    <TextField
                        id={"outlined-multiline-static"}
                        label={"Multiline"}
                        multiline
                        rows={"4"}
                        margin={"normal"}
                        variant={"outlined"}
                        style={{
                            flexGrow: 1
                        }}
                        onChange={(e) => {
                            this.setState({ text: e.target.value });
                        }}
                    />
                    <IconButton
                        style={{
                            height: 48,
                        }}
                        onClick={() => {
                            console.log({
                                userData: userData.displayName,
                                text,
                            });
                            this.setData([...chatLog], { name: userData.displayName, text });
                            this.setState({
                                chatLog: [...chatLog, { name: userData.displayName, text }]
                            });
                        }}
                    >
                        <Send />
                    </IconButton>
                </Paper>
            </Template>

        );
    }
}


export default withRouter(Chat);