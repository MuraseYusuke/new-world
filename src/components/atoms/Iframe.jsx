import React from 'react';
import Iframe from 'react-iframe';

const IframeBox = (props) => {
    const {
        id,
        url,
        width,
        height,
    } = props;

    return (
        <Iframe 
            id={id}
            url={url}
            width={width}
            height={height}
            display="initial"
            position="relative"
        />
    )
}

export default IframeBox;