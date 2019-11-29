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
import theme from './../theme';

interface Props extends RouteComponentProps {
}

interface State {
    text: string,
    chatLog: ChatValue[],
    userData: any,
}

interface ChatValue {
    uid: string | number,
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
        let room = this.props.location.state.docName;
        const db = firebase.firestore();
        const docRef = db.collection("chat").doc(`${room}`);

        const doc = await docRef.get();
        const data = doc.data();
        data && this.setState({ chatLog: data.chatLog });
    }

    async setData(value: ChatValue[], addValue: ChatValue) {
        let room = this.props.location.state.docName;
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

    render() {
        const {
            chatLog,
            text,
            userData
        } = this.state;

        return (
            <Template>
                <div
                    style={{
                        overflow: "auto",
                        marginBottom: 140,
                    }}
                >
                {
                    <List
                        style={{
                            maxHeight: "calc(100% - 210px)",
                        }}
                    >
                        {
                            chatLog && chatLog.map((d, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            color: "white",
                                            marginRight: 8,
                                            marginLeft: 8,
                                            textAlign: (userData && d.uid === userData.uid) ? "right" : "left",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "inline-block",
                                                padding: 8,
                                                border: `1px solid ${theme.pureColor}`,
                                                borderRadius: 10,
                                                marginTop: 8,
                                            }}
                                        >
                                            <div style={{ fontSize: 10 }}>{d.name}</div>
                                            <div>{d.text}</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </List>
                }
                </div>
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
                        borderRadius: 0,
                    }}
                >
                    <TextField
                        id={"outlined-multiline-flexible"}
                        label={"コメントを入力"}
                        multiline
                        rowsMax={"4"}
                        margin={"normal"}
                        variant={"outlined"}
                        style={{
                            flexGrow: 1,
                            cursor: "text"
                        }}
                        value={text}
                        onChange={(e) => {
                            this.setState({ text: e.target.value });
                        }}
                    />
                    <IconButton
                        style={{
                            height: 48,
                            marginTop: 16,
                            marginBottom: 8,
                        }}
                        onClick={() => {
                            this.setData([...chatLog], { uid: userData.uid, name: userData.displayName, text });
                            this.setState({
                                chatLog: [...chatLog, { uid: userData.uid, name: userData.displayName, text }],
                                text: "",
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