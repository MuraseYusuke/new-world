import React from 'react';
import MailOutline from '@material-ui/icons/MailOutline';
import Button from '@material-ui/core/Button';

const MailButton = (props) => {
    return (
        <Button
            style={{
                height: 48,
                width: 48,
                minHeight: 48,
                minWidth: 48,
                border: "1px solid #ffffff"
            }}
        >
            <MailOutline
                style={{
                    color: "white"
                }}
            />
        </Button>
    )
}

export default MailButton;