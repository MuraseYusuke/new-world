import React from 'react';
import TextField from './../molecules/TextFIeld';

interface Props {
    items: string[];
    labels?: string[];
    onClick?: () => void;
}

const MultiTextField = (props: Props) => {
    const {
        items,
        labels,
        onClick,
    } = props;
    return (
        <React.Fragment>
            {
                items ? items.map((item, idx) => (
                    <TextField
                        id={`BadCar_${idx}`}
                        label={labels && labels[idx]}
                        onChange={onClick}
                    />
                )) : null
            }
        </React.Fragment>
    )
}


export default MultiTextField;