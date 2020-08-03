import React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import firebase from '../../firebase';
import TexField from '@material-ui/core/TextField';
import TextField from '@material-ui/core/TextField';
import theme from './../theme';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { compose } from 'recompose';
import { Delete } from '@material-ui/icons';
import PreviewInputFile from '../molecules/FileInput';

const styles = (theme: Theme): StyleRules => createStyles({
    textField: {
        color: '#FFFFFF',
        marginTop: 8,
    }
});


interface Props extends RouteComponentProps, WithStyles<typeof styles> {
}

interface State {
    userData: any
    file: string;
}

class ChangeProfile extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            userData: undefined,
            file: '',
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(userData => {
            this.setState({ userData });
        });
    }

    render() {
        const {
            classes
        } = this.props;
        const {
            file,
        } = this.state;
        return (
            <Template>
                <div
                    style={{
                        display: 'flex',
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 16,
                            margin: 8,
                            backgroundColor: theme.color.saveBackgroundColor,
                            width: '100%',
                            border: `1px solid ${theme.color.pureColor}`,
                            borderRadius: 10,
                        }}
                    >
                        <PreviewInputFile
                            type={'file'}
                            accept={'image/'}
                            onChange={() => {
                            }}
                            defaultValue={file}
                        />
                        <TextField
                            id={'lastName'}
                            inputProps={{
                                className: classes.textField
                            }}
                            label={'姓'}
                            helperText={'登録する姓を入力してください'}
                        />
                        <TexField
                            id={'firstName'}
                            className={
                                classes.textField
                            }
                            label={'名'}
                            helperText={'登録する名を入力してください'}
                        />
                    </div>
                </div>
            </Template>
        )
    }
}

export default compose<Props, Props>(
    withRouter,
    withStyles(styles),
)(ChangeProfile);