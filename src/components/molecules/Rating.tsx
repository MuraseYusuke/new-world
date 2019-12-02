import React from 'react';
import Rating from '@material-ui/lab/Rating';

interface Props {
    onClick: () => void;
    style?: React.CSSProperties;
    star: number;
};

export default function SimpleRating(props: Props){
    const [value, setValue] = React.useState(props.star ? props.star : 0);
    const { onClick, style } = props;

    return (
        <Rating 
            style={{
                ...style
            }}
            name="simple-controlled"
            value={value}
            onChange={(e, ev) => {
                e.stopPropagation();
                setValue(ev);
                onClick();
            }}
        />
    );
}