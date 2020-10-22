import React, { useState } from 'react';
import MTextField from '@material-ui/core/TextField';
import { IconButton } from '@material-ui/core';
import { default as DeleteIcon } from '@material-ui/icons/Delete';
import { default as theme } from './../theme';

interface Props {
    id: string;
    label?: string;
    onChange?: (e: any, newValue: string) => void;
}

function TextField(props: Props) {
    const {
        id,
        label,
        onChange,
    } = props;

    return (
        <MTextField
            id={id}
            onChange={(event) => {
                typeof onChange == "function" && onChange(event, event.target.value);
            }}
            label={label}
        />
    );
}

export function OutLineTextField(props: Props) {
    const {
        id,
        label,
        onChange,
    } = props;
    return (
        <MTextField
            id={id}
            onChange={(event) => {
                typeof onChange == "function" && onChange(event, event.target.value);
            }}
            label={label}
            variant={"outlined"}
        />
    );
}

export function SeriesTextFields(props: Props) {
    const {
        id,
        label,
        onChange,
    } = props;
    const [fieldsArray, setFields] = useState([{ id: 1, value: "" }]);

    return (
        <div
            key={`text_fields`}
        >
            {
                fieldsArray.map((field, idx) => {
                    return (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                            key={`multiTextFields_${idx}`}
                        >
                            <MTextField
                                id={`multiTextFields_${id}_${idx}`}
                                onChange={(event) => {
                                    typeof onChange == "function" && onChange(event, event.target.value);
                                    let tmpFieldsArray = [...fieldsArray];
                                    tmpFieldsArray[idx].value = event.target.value;
                                    setFields([...tmpFieldsArray]);
                                }}
                                label={label}
                                style={{
                                    paddingBottom: 8,
                                }}
                                value={field.value}
                            />
                              {
                                fieldsArray.length !== 1 ?
                                <IconButton
                                    style={{
                                        height: 24,
                                        width: 24,
                                    }}
                                    onClick={() => {
                                        const target = fieldsArray.findIndex(d => d.id === field.id);
                                        const deleteArray = [...fieldsArray.slice(0, target), ...fieldsArray.slice(target+1)];
                                        setFields([...deleteArray]);
                                    }}
                                >
                                    <DeleteIcon
                                        style={{
                                            color: theme.color.saveBackgroundColor
                                        }}
                                    />
                                </IconButton>
                                :
                                null
                            }
                        </div>
                    );
                })
            }
            <div
                style={{
                    display: 'flex',
                    padding: 8,
                    marginTop: 16,
                    justifyContent: 'center',
                    border: `1px solid ${theme.color.saveBackgroundColor}`
                }}
                onClick={() => {
                    const lastIdx = fieldsArray[fieldsArray.length - 1].id;
                    setFields([...fieldsArray, { id: lastIdx + 1, value: "" }]);
                }}
            >{"追加"}</div>
        </div>
    );
}

export default TextField;
