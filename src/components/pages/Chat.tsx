import * as React from 'react';
import './../../App.css';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import {
    List,
    TextField,
    IconButton,
} from '@material-ui/core';
import {
    Send
} from '@material-ui/icons';
import Paper from './../molecules/Paper';
import firebase, { getFirebaseData } from './../../firebase';
import theme from './../theme';
import shortid from 'shortid';
import { isEqual } from 'lodash';

interface Props extends RouteComponentProps {
}

interface State {
    text: string,
    chatLog: ChatValue[],
    userData: any,
}

interface ChatValue {
    id: string;
    uid: string | number;
    name: string;
    text: string;
}

class Chat extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: "",
            chatLog: [],
            userData: undefined,
        }
        this.scrollElement = null;
    }
    private scrollElement: HTMLDivElement | null;

    //firestore にデータ取得しに行く関数
    async getData() {
        let room = this.props.location.state.docName;
        const data = await getFirebaseData('chat', room);
        data && this.setState({ chatLog: data.chatLog })
    }

    //firestore にデータセットしに行く関数
    async setData(value: ChatValue[], addValue: ChatValue) {
        let room = this.props.location.state.docName;
        const db = firebase.firestore();
        const docRef = db.collection("chat").doc(room);
        docRef.update({ chatLog: [addValue, ...value] }).then(data => {
        }).catch(error => {
        })
    }

    //firestoreの更新を監視
    // onLoadSnapShot = (room: string, no: string) => {
    //     firebase
    //     .firestore()
    //     .collection("chat")
    //         .onSnapshot(snapshot => {
    //             snapshot.docChanges().forEach(change => {
    //                 let data = change.doc.data();
    //                 console.log({ data });
    //                 if(data.chatLog.length !== this.state.chatLog.length ){
    //                     this.setState({ chatLog: data.chatLog });
    //                 }

    //             });
    //         })
    // }
    onLoadSnapShot = (room: string, no: string) => {
        firebase
        .firestore()
        .collection('chat')
        .onSnapshot(snapshot => {
            console.log({ snapshot });
            snapshot.docChanges().forEach(change => {
                console.log({ change });
                let data = change.doc.data();
                console.log({ data });
                if(!isEqual(data.chatLog, this.state.chatLog)){
                    this.setState({
                        chatLog: data.chatLog,
                    })
                }
            })
        })
    }

    componentDidMount() {
        this.getData();
        firebase.auth().onAuthStateChanged(userData => {
            this.setState({ userData });
        });
        this.onLoadSnapShot(this.props.location.state.docName, "");
    }

    render() {
        const {
            chatLog,
            text,
            userData
        } = this.state;
        console.log({
            render: chatLog
        })
        return (
            <Template>
                <div
                    style={{
                        height: '100vh',
                        width: '100vw',
                        overflow: 'auto'
                    }}
                >
                    <div
                        style={{
                            overflow: "auto",
                            marginBottom: 130,
                        }}
                        ref={elm => this.scrollElement = elm}
                    >
                        {
                            <List
                                style={{
                                    maxHeight: "calc(100% - 210px)",
                                    display: 'flex',
                                    flexDirection: 'column-reverse',
                                }}
                            >
                                {
                                    chatLog && chatLog.map((d, index) => {
                                        return (
                                            <div
                                                style={{
                                                    color: "white",
                                                    marginRight: 8,
                                                    marginLeft: 8,
                                                    textAlign: (userData && d.uid === userData.uid) ? "right" : "left",
                                                }}
                                                key={`chat_${d.id}${index}`}
                                            >
                                                <div
                                                    style={{
                                                        display: "inline-block",
                                                        padding: 8,
                                                        border: `1px solid ${theme.color.pureColor}`,
                                                        borderRadius: 10,
                                                        marginTop: 8,
                                                    }}
                                                >
                                                    <div style={{ fontSize: 10 }}>{d.name}</div>
                                                    <div
                                                        style={{
                                                            whiteSpace: 'normal',
                                                            lineBreak: 'normal',
                                                            wordWrap: 'break-word',
                                                        }}
                                                    >{d.text}</div>
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
                            width: '100%',
                            display: 'flex',
                            boxSizing: 'border-box',
                            position: 'fixed',
                            bottom: 0,
                            padding: '0px 8px',
                            alignItems: 'center'
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
                                const id = shortid.generate();
                                this.setData([...chatLog], { id, uid: userData.uid, name: userData.displayName, text });
                                this.setState({ text: '' });
                            }}
                            disabled={!text}
                        >
                            <Send />
                        </IconButton>
                    </Paper>
                </div>
            </Template>
        );
    }
}


export default Chat;