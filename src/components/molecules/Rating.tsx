import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function SimpleRating(){
    const [value, setValue] = React.useState(2);

    return (
        <Rating 
            name="simple-controlled"
            value={value}
            onChange={(e, ev) => {
                setValue(ev);
            }}
        />
    );
}