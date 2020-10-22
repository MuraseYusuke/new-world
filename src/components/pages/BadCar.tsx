import React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import Template from './../templates';
import firebase from '../../firebase';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { compose } from 'recompose';
import MultiTextField from './../organisms/MultiTextField';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme): StyleRules => createStyles({
    textField: {
        color: '#FFFFFF',
        marginTop: 8,
    }
});

interface ErrorMessageProps {
    [key: number]: string
}

interface Props extends RouteComponentProps, WithStyles<typeof styles> {
}

interface State {
    userData: any;
    file: string;
    edit: boolean;
}

class BadCar extends React.Component<Props, State>{

    render() {
        return (
            <Template>
                <div
                    style={{
                        display: 'flex',
                        boxSizing: 'border-box',
                    }}
                >
                    <MultiTextField 
                        items={['ナンバー', '場所']}
                    />
                    <Button
                        onClick={() => {
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition((v) => {
                                    alert('緯度=' + v.coords.latitude + ' 経度=' + v.coords.longitude + ' 精度=' + v.coords.accuracy);
                                }, (e) => {
                                    const errorMessage: ErrorMessageProps = {
                                        0: "原因不明のエラーが発生しました",
                                        1: "位置情報の取得が許可されませんでした",
                                        2: "電波状況などで位置情報が取得できませんでした",
                                        3: "位置情報の取得に時間がかかり過ぎてタイムアウトしました"
                                    };
                                    alert(errorMessage[e.code]);
                                }, { enableHighAccuracy: true, timeout: 5000 })
                            } else {
                                alert('位置情報を取得出来ません')
                            }
                        }}
                        children={'位置情報取得'}
                    />
                </div>
            </Template>
        )
    }
}

export default compose<Props, Props>(
    withStyles(styles),
)(BadCar);