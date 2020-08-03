import React, { useState } from 'react';
import styled from 'styled-components';
import { Delete } from '@material-ui/icons';
import theme from './../theme';

interface Props {
    type: string;
    accept: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: string;
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Label = styled.label`
    border: 1px solid #ffffff;
    padding: 8px;
    color: #ffffff;
`

const Input = styled.input`
    display: none;
`
const FileName = styled.p`
`

const onChange = (event: React.ChangeEvent<HTMLInputElement>, cb: (e: React.ChangeEvent<HTMLInputElement>) => void, setFile: (target: string) => void) => {
    cb(event);
    if (!!event.target.files && event.target.files.length > 0) {
        const imgURL = window.URL.createObjectURL(event.target.files[0]);
        setFile(imgURL);
    }
}

const PreviewInputFile = (props: Props) => {
    const [file, setFile] = useState('');

    return (
        <Wrapper>
            <div
                style={{
                    color: theme.color.pureColor,
                    marginRight: 8
                }}
            >プロフィール画像</div>
            {
                file ?
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                            border: `2px solid ${theme.color.pureColor}`,
                            maxHeight: 210,
                            maxWidth: 210,
                            boxSizing: 'border-box'
                        }}
                    >
                        <img
                            src={file}
                            style={{
                                maxHeight: 200,
                                width: 200,
                                objectFit: 'contain'
                            }}
                            alt={'preview'}
                        />
                        <Delete
                            style={{
                                position: 'absolute',
                                right: 2,
                                top: 2
                            }}
                            onClick={() => {
                                setFile('');
                            }}
                        />
                    </div>
                    :
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Label>
                            ファイルを選択
                            <Input
                                {...props}
                                onChange={e => onChange(e, props.onChange, setFile)}
                            />
                        </Label>
                        <FileName>{file}</FileName>
                    </div>
            }
        </Wrapper>
    );
}

export default PreviewInputFile;