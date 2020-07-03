import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

interface Props {
    label: string;
    style?: React.CSSProperties;
}

const ChatBabble = (props: Props) => {
    const styleSheet = StyleSheet.create({
        container:{
            width: '100%',
            paddingLeft: 8,
        },
        outline: {
            position: "relative",
            display: "inline-block",
            margin: "1.5em 0 1.5em 15px",
            padding: "6px 10px 6px 5px",
            minWidth: 120,
            maxWidth: "100%",
            color: "#555",
            fontSize: 16,
            background: "#ffffff",
            transform: 'skew(-18deg)',
        },
        babble: {
            position: "relative",
            display: "inline-block",
            padding: "7px 10px",
            minWidth: 120,
            maxWidth: "100%",
            color: "#555",
            fontSize: 16,
            background: "#2b2b2b",
            transform: 'skew(6deg)',
        },
        outtriangle: {
                display: "inline-block",
                position: "absolute",
                left: -28,
                top: "35%",
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "0 10px 15px 16px",
                transform: 'scale(1.5) rotate(-36deg)',
                borderColor: "transparent transparent #ffffff transparent",
        },
        intriangle: {
            display: "inline-block",
            position: "absolute",
            left: -31,
            top: "34%",
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: "0 10px 15px 16px",
                transform: 'rotate(-30deg)',
                borderColor: "transparent transparent #2b2b2b transparent",
        },
        outangle: {
            position: "absolute",
            top: "48%",
            left: -6,
            height: 18,
            width: 16,
            transform: 'skew(34deg, -32deg)',
            backgroundColor: "#ffffff"
        },
        inangle: {
            position: "absolute",
            top: "42%",
            left: -10,
            width: 18,
            height: 12,
            transform: 'skew(34deg, -32deg)',
            backgroundColor: "#2b2b2b",
        },
        p: {
            margin: 0,
            padding: 0,
            color: "#ffffff",
            fontWeight: 'bold',
            wordWrap: 'break-word',
            wordBreak: 'break-all'
        }
    });

    const {
        label,
        style
    } = props;

    return (
        <div
            style={{
                ...style
            }}
            className={css(styleSheet.container)}
        >
            <div
                className={css(styleSheet.outline)}
            >
                <div className={css(styleSheet.outtriangle)} />
                <div className={css(styleSheet.outangle)} />
                <div
                    className={css(styleSheet.babble)}
                >
                    <div className={css(styleSheet.intriangle)} />
                    <div className={css(styleSheet.inangle)} />
                    <p className={css(styleSheet.p)}>{label}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatBabble;