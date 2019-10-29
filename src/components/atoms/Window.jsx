import React from 'react';
import { Rnd } from 'react-rnd';

const Window = (props) => {
    const {
        style,
        defaultX,
        defaultY,
        width,
        height,
        enableResize,
    } = props;
    
    return (
        <Rnd
            style={{
                border: "1px solid #ffffff",
                backgroundColor: "rgba(107,255,205,0.3)",
                ...style
            }}
            default={{
                x: defaultX ? defaultX : 0,
                y: defaultY ? defaultY : 0,
                width: width ? width : 320,
                height: height ? height : 200,
            }}
            enableResizing={enableResize}
        >
            {props.children}
        </Rnd>
    )
}

export default Window;