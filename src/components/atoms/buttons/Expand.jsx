import React from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const Expand = (props) => {
    const {
        open,
    } = props;
    return (
        <>
        {
            open ?
            <ExpandLess />
            :
            <ExpandMore />
        }
        </>
    );
}

export default Expand;