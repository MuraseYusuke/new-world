import * as React from 'react';
import './../../App.css';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import firebase from './../../firebase';
import ImgMediaCard from './../molecules/Card';
import MenuFab from './../molecules/MenuFab';
import styled from 'styled-components';

interface Props extends RouteComponentProps {
}

interface State {
    userData: any;
    chatRooms: RoomValue[];
}

interface RoomValue {
    id: string;
    title: string;
    description: string;
    homeImage: string;
}

interface ChatValue {
    name: string;
    text: string;
    uid: string;
}

class ChatHome extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userData: undefined,
            chatRooms: [],
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(userData => {
            this.setState({ userData }, async () => {
                const db = firebase.firestore();
                const userRef = db.collection("user_information").doc(`${this.state.userData.email}`);
                let docs = await userRef.get();
                let data = docs.data();
                if (data) {
                    let chatAuth: string[] = data.chatAuth;
                    const chatRef = db.collection("chat");
                    let roomDocs = await chatRef.get();
                    let roomIds = roomDocs.docs.map((d) => d.id).filter(d => chatAuth.indexOf(d) !== -1);
                    let authRoom = roomDocs.docs.filter(d => roomIds.indexOf(d.id) !== -1);
                    let roomDatas = authRoom.map(d => {
                        let id = d.id;
                        let room = d.data();
                        return {
                            id,
                            title: room.title,
                            description: room.description,
                            homeImage: room.homeImage,
                        }
                    });
                    this.setState({ chatRooms: roomDatas });
                }
            });
        });
    }

    render() {
        const {
            chatRooms,
        } = this.state;
        return (
            <Template>
                <RoomContainer>
                {
                    chatRooms && chatRooms.map((d) => (
                        <ImgMediaCard
                            image={d.homeImage}
                            title={d.title}
                            text={d.description}
                            onClick={() => {
                                this.props.history.push({ pathname: "/Chat", state: { docName: d.id }})
                            }}
                            key={`chat_card_${d.id}`}
                        />
                    ))
                }
                </RoomContainer>
                <MenuFab />
            </Template>

        );
    }
}

const RoomContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export default ChatHome;