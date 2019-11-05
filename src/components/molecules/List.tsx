import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    ListItemIcon,
} from '@material-ui/core';
import {
    School
} from '@material-ui/icons';
import CollapseItem from './../molecules/Collapse';
import Expand from './../atoms/buttons/Expand';
import styled from 'styled-components';

interface Props {
    open: boolean,
    children?: React.ReactNode;
}

const ItemList = (props: Props) => {
    const [open, setOpen] = React.useState(true);

    return (
        <ListContainer>
        <List>
            <ListItem>
                <ListItemIcon>
                    <School />
                </ListItemIcon>
                <ListItemText primary="school" />
                <Expand open />
            </ListItem>
            <CollapseItem open>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <School />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </CollapseItem>
        </List>
        </ListContainer>
    );
}

export default ItemList;

const ListContainer = styled.div`
    z-index: 1;
`;