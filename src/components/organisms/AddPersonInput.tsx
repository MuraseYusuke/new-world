import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import firebase, { getFirebaseData, firestore } from './../../firebase';
import theme from './../theme';
import OutlineButton from '@material-ui/core/Button';
import { css, StyleSheet } from 'aphrodite';

interface AddPersonProps {
    personals: any[];
    userData: any;
}

const getLastId = (arr: any[]) => {
    return arr.reduce((acm, c, i) => {
        let id = c.id;
        return acm < c ? c : acm;
    }, 0);
}


const AddPersonInput = (props: AddPersonProps) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState("");
    const [birthday, setBirthday] = useState("");
    const [visit, setVisit] = useState("");
    const [star, setStar] = useState(0);
    const [description, setDescription] = useState("");
    const [image, setFile] = useState();
    const { personals, userData } = props;
    const addPerson = async () => {
        const db = firebase.firestore();
        const id = getLastId(personals) + 1;
        const addData = {
            age: age,
            description: description,
            id: id,
            image: image,
            job: job,
            name: name,
            star: star,
            visit: visit,
        }
        if(!!userData){
            const docRef = firestore.collection('personal_data').doc(userData.email);
            const test = await getFirebaseData('personal_data', userData.email);
            console.log({
                test
            });
            docRef.update({ personals: [...personals, addData] }).then((data) => {
                alert("登録しました");
    
            }).catch(err => {
                alert("登録に失敗しました");
            })
        }
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
                inputProps={{ style: { color: theme.color.pureColor } }}
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
                inputProps={{ style: { color: theme.color.pureColor } }}
                style={{
                    flexGrow: 1,
                    cursor: "text",
                    color: theme.color.pureColor,
                    borderColor: theme.color.pureColor,
                }}
                value={birthday}
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
                inputProps={{ style: { color: theme.color.pureColor } }}
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
                inputProps={{ style: { color: theme.color.pureColor } }}
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
                inputProps={{ style: { color: theme.color.pureColor } }}
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
                    if (!!e.target.files && e.target.files.length > 0) {
                        const imgURL = window.URL.createObjectURL(e.target.files[0]);

                        setFile(imgURL);
                    }
                }}
            />
            <img
                src={image}
                style={{
                    maxHeight: 100,
                    width: 100,
                    objectFit: 'contain'
                }}
                alt={'preview'}
            />
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
                        addPerson();
                    }}
                >{"追加"}</OutlineButton>
            </div>
        </>
    )
}

export default AddPersonInput;