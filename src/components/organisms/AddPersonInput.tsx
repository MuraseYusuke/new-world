import React, { useState, useEffect } from 'react';
import {
    Fab,
    TextField
} from '@material-ui/core';
import {
    Add,
} from '@material-ui/icons';

interface AddPersonProps {
}

const AddPersonInput = (props: AddPersonProps) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState("");
    const [visit, setVisit] = useState("");
    const [star, setStar] = useState(0);
    const [description, setDescription] = useState("");

    useEffect(() => {

    })

    return (
        <>
            <TextField
                id={"outlined-multiline-flexible"}
                label={"名前"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"年齢"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={age}
                onChange={(e) => {
                    setAge(e.target.value);
                }}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"職業"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={job}
                onChange={(e) => {
                    setJob(e.target.value);
                }}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"出身地"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={visit}
                onChange={(e) => {
                    setVisit(e.target.value);
                }}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"☆"}
                multiline
                rowsMax={"1"}
                margin={"normal"}
                variant={"outlined"}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={star}
                onChange={(e) => {
                    const star = Number(e.target.value);
                    setStar(star);
                }}
            />
            <TextField
                id={"outlined-multiline-flexible"}
                label={"説明"}
                multiline
                rowsMax={"4"}
                margin={"normal"}
                variant={"outlined"}
                style={{
                    flexGrow: 1,
                    cursor: "text"
                }}
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <Fab
                onClick={() => {

                }}
                size={"large"}
                style={{
                }}
            >
                <Add />                
            </Fab>
        </>
    )
}

export default AddPersonInput;