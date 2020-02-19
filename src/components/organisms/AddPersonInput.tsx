import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import {
    Add,
} from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import firebase from './../../firebase';
import theme from './../theme';
import OutlineButton from '@material-ui/core/Button';
import { getAuth, getData } from '../../utils/firebase';
import { css, StyleSheet } from 'aphrodite';

interface AddPersonProps {
    personals: any[];
}

const AddPersonInput = (props: AddPersonProps) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState("");
    const [birthday, setBirthday] = useState("");
    const [visit, setVisit] = useState("");
    const [star, setStar] = useState(0);
    const [description, setDescription] = useState("");
    const [file, setFile] = useState();
    const { personals } = props;
    const addPerson = () => {
        const db = firebase.firestore();
        const addData = {
            name,
            age,
            job,
            visit,
            star,
            description,
        }
        firebase.auth().onAuthStateChanged(userData => {
            if (userData) {
                const docRef = db.collection("personal_data").doc(`${userData.email}`);
                docRef.set([...personals, addData]).then((data) => {
                    alert("登録しました");
                }).catch(err => {
                    alert("登録に失敗しました");
                });
            }
        })
    }

    const ss = StyleSheet.create({
        root: {
            color: theme.color.pureColor
        },
        input: {
            color: theme.color.pureColor
        },
        notchedOutline: {
            borderColor: theme.color.pureColor,
        }
    });

    return (
        <>
            <TextField
                id={"outlined-multiline-flexible"}
                label={"名前"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                className={css(ss.root)}
                inputProps={{ 
                    className: css(ss.notchedOutline) 
                    }}
                style={{
                    flexGrow: 1,
                    cursor: "text",
                }}
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
                key={'name'}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"年齢"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                inputProps={{ style: { color: theme.color.pureColor }}}
                style={{
                    flexGrow: 1,
                    cursor: "text",
                    color: theme.color.pureColor,
                    borderColor: theme.color.pureColor,
                }}
                value={age}
                onChange={(e) => {
                    setAge(e.target.value);
                }}
                key={'age'}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"生年月日"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                inputProps={{ style: { color: theme.color.pureColor }}}
                style={{
                    flexGrow: 1,
                    cursor: "text",
                    color: theme.color.pureColor,
                    borderColor: theme.color.pureColor,
                }}
                value={age}
                onChange={(e) => {
                    setBirthday(e.target.value);
                }}
                key={'birth-day'}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"職業"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                inputProps={{ style: { color: theme.color.pureColor }}}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={job}
                onChange={(e) => {
                    setJob(e.target.value);
                }}
                key={'job'}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"出身地"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                inputProps={{ style: { color: theme.color.pureColor }}}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={visit}
                onChange={(e) => {
                    setVisit(e.target.value);
                }}
                key={'visit'}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"☆"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                className={css(ss.root)}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                inputProps={{ style: { color: theme.color.pureColor }}}
                value={star}
                onChange={(e) => {
                    const star = Number(e.target.value);
                    setStar(star);
                }}
                key={'star'}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"説明"}
                multiline
                rowsMax={"4"}
                margin={"normal"}
                variant={"outlined"}
                className={css(ss.root)}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                key={'description'}
            />
            <input
                type="file"
                name="image"
                multiple={false}
                onChange={(e) => {
                    console.log({
                        e,
                        file: e.target.files
                    });
                    if (!!e.target.files && e.target.files.length > 0) {
                        const imgURL = window.URL.createObjectURL(e.target.files[0]);

                        setFile(imgURL);
                    }
                }}
            />
            <img src={file} style={{ maxHeight: 100, width: 100, objectFit: 'contain' }} />
            <div
                style={{
                    width: '100%',
                    padding: 8,
                    boxSizing: 'border-box',
                }}
            >
                <OutlineButton
                    variant={'outlined'}
                    style={{
                        display: 'flex',
                        color: theme.color.pureColor,
                        border: `1px solid ${theme.color.pureColor}`,
                        width: '100%',
                        minHeight: 40
                    }}
                    onClick={() => {

                    }}
                >{"追加"}</OutlineButton>
            </div>
        </>
    )
}

export default AddPersonInput;