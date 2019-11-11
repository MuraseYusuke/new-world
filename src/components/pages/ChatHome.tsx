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
import { getChatData, setChatData } from './../utils/spreadsheet';
import firebase from './../../firebase';
import ImgMediaCard from './../molecules/Card';
import backImg from './../../assets/background.jpg';

interface Props extends RouteComponentProps {

}

interface State {
}

interface ChatValue {
    name: string,
    text: string,
}

class ChatHome extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

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

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps: Props, nextState: State){
    }

    render() {

        return (
            <Template>
                {

                    <ImgMediaCard
                        image={backImg}
                        title={"HELLO WORLD"}
                        text={"マニュアル 手引書、取扱説明書。本項で解説。 オートの反対の意味で、手動のこと。 自動車の運転方式の1つ、マニュアルトランスミッション。 カメラでのピントの合わせ方・マニュアルフォーカス。またそれ以外の露出やシャッター速度を、すべて手動で設定する事も指す。"}
                    />
                }
            </Template>

        );
    }
}


export default withRouter(ChatHome);