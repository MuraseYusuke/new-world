import React from 'react';

const GrayLayer = (props) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
            }}
        >
            {props.children}
        </div>
    )
}

export default GrayLayer;