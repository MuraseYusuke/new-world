import React from 'react';
import { withRouter } from "react-router";
import firebase from './../../firebase';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  progress: {
    "root": {

    },
    "progress": {
      margin: theme.spacing(1),

    }
  }
}));

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '', 
      password: '' ,
      loading: false,
    };
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  async handleSignUp(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch (error) {
      alert(error);
    }
  }
  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.history.push('/Welcome');
    } catch (error) {
      alert(error);
    }
    this.setState({ loading: false });
  }

  render() {
    const {
      classes,
    } = this.props;
    const { 
      email, 
      password,
      loading 
    } = this.state;

    return (
      <BkColor>
        {
          loading ?
            <LoadProgress>
              <CircularProgress
                style={{
                  display: "block",
                  margin: "auto",
                }}
                size={500}
                className={classes.progress}
              />
            </LoadProgress>
            :
            <div
                style={{
                  width: "100%",
                  paddingTop: 80,
                }}
            >
              <div
                style={{
                  fontSize: 50,
                  color: "white",
                  width: 500,
                  textAlign: "center",
                  margin: "0 auto",
                }}
              >
                {"HELLO WORLD"}
              </div>
              <div
                style={{
                  width: 260,
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 25,
                }}
              >
                <InputLabel htmlFor="email：">Email</InputLabel>
                <input
                  style={{
                    height: 25,
                    borderRadius: 5,
                    border: "none",
                  }}
                  id="email"
                  value={email}
                  type="text"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div
                style={{
                  width: 260,
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 25,
                }}
              >
                <InputLabel htmlFor="password：">password</InputLabel>
                <input
                  style={{
                    height: 25,
                    borderRadius: 5,
                    border: "none",
                  }}
                  id="password"
                  value={password}
                  type="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 auto",
                  width: 200,
                  marginTop: 50,
                }}
              >
                <Button
                  style={{
                    color: "white",
                    borderColor: "white"
                  }}
                  onClick={this.handleSignUp}
                >
                  {"Sign up"}
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    color: "white",
                    borderColor: "white"
                  }}
                  onClick={this.handleLogin}
                >
                  {"Login"}
                </Button>
              </div>
            </div>
        }
      </BkColor>
    );
  }
};
export default withRouter(withStyles(useStyles)(Login));

export const BkColor = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #9b3530;
  margin: auto;
`

const InputLabel = styled.label`
  color: white;
`

const LoadProgress = styled.div`
  width: 100%;
  padding-top: 150px;
`