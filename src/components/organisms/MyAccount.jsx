import React from 'react';
import styled from 'styled-components';
import { auth } from 'firebase';

const MyAccount = () => {
    let user = auth().currentUser;
    return (
        <SEditName>
            <input type="text" placeholder="userName" style={{ borderRadius: "10px" }} />
            <SSendButton
                onClick={() => {
                    user.updateProfile({
                        // displayName: 'ゆうすけ'
                        photoURL: "https://firebasestorage.googleapis.com/v0/b/new-world-2b3fc.appspot.com/o/113618.jpg?alt=media&token=6d35119f-bfeb-48f9-b78e-880e575d4ed5"
                    })
                }}
            >名前変更</SSendButton>
        </SEditName>
    )
}

const SEditName = styled.div`
    display: flex;
    position: absolute;
    right: 100px;
    top: 0;
`
const SSendButton = styled.div`
    height: 20px;
    width: 100px;
    color: white;
`

export default MyAccount;