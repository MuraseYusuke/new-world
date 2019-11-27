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
import MenuFab from './../molecules/MenuFab';


interface Props extends RouteComponentProps {
}

interface State {
    userData: any,
}

interface ChatValue {
    name: string,
    text: string,
}

class ChatHome extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userData: undefined
        }
    }

    async getData() {
        console.log("test");
        // let room = "test";
        // const db = firebase.firestore();

        // if (this.props.userData) {
        //     const userRef = await db.collection("user_information").doc(`${this.props.userData.email}`);
        //     console.log({ userRef });
        //     if (userRef) {
        //         let docs = await userRef.get();
        //         let data
        //         console.log({
        //             docs,
        //         })
        //     }
        // }
        // const docRef = db.collection("chat");

        // docRef.get().then((snapShot) => {
        //     snapShot.forEach((doc) => {
        //         // console.log({ doc: doc.id, data: doc.data() });
        //     });
        // });
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(userData => {
            this.setState({ userData }, async () => {
                const db = firebase.firestore();
                const userRef = db.collection("user_information").doc(`${this.state.userData.email}`);
                let docs = await userRef.get();
                let data = docs.data();
                if(data){
                    let chatAuth = data.chatAuth;
                    const chatRef = db.collection("chat").doc();
                    let roomDocs = await chatRef.get();
                    let roomIds = roomDocs.id;
                    console.log({
                        roomIds,
                    })
                }
            });
        });
    }

    componentWillReceiveProps(nextProps: Props, nextState: State){
        if(nextState.userData){
            if(nextState.userData !== this.state.userData){
                console.log({
                    test: "tese"
                });
                // this.getData();
            }
        }

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
                <ImgMediaCard
                    image={backImg}
                    title={"HELLO WORLD"}
                    text={"マニュアル 手引書、取扱説明書。本項で解説。 オートの反対の意味で、手動のこと。 自動車の運転方式の1つ、マニュアルトランスミッション。 カメラでのピントの合わせ方・マニュアルフォーカス。またそれ以外の露出やシャッター速度を、すべて手動で設定する事も指す。"}
                />
                <MenuFab />
            </Template>

        );
    }
}


export default withRouter(ChatHome);