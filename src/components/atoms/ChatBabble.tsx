import * as React from 'react';
import { StyleSheet, css } from 'aphrodite';

interface Props {
    label: string;
}

const ChatBabble = (props: Props) => {
    const styleSheet = StyleSheet.create({
        babble: {
            position: "relative",
            display: "inline-block",
            margin: "1.5em 0 1.5em 15px",
            padding: "7px 10px",
            minWidth: 120,
            maxWidth: "100%",
            color: "#555",
            fontSize: 16,
            background: "#e0edff",
            ':before': {
                content: "",
                position: "absolute",
                top: "50%",
                left: "-30px",
                marginTop: "-15px",
                border: "15px solid transparent",
                borderRight: "15px solid #e0edff",
            },
        },
        p: {
            margin: 0, 
            padding: 0
        }
    });

    const {
        label
    } = props;

    return (
        <div
            className={css(styleSheet.babble)}
        >
            <p className={css(styleSheet.p)}>{label}</p>
        </div>
    );
};

export default ChatBabble;