import React from 'react';
import Collapse from '@material-ui/core/Collapse';

interface Props {
    open: boolean,
    children?: React.ReactNode;
}

const CollapseItem = (props: Props) => {
    const {
        open,
        children,
    } = props;
    return (
        <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
        >
            {children}
        </Collapse>
    );
}

export default CollapseItem;