import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import theme from './../theme';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                NEW WORLD
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn(props) {
    const classes = useStyles();

    const {
        onLogin,
        error,
    } = props;

    const [mail, mailChange] = useState("");
    const [password, passChange] = useState("");

    return (
        <Container 
        component="main" 
        maxWidth="xs"
        >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar 
                src={"https://firebasestorage.googleapis.com/v0/b/new-world-2b3fc.appspot.com/o/817-300x300.jpg?alt=media&token=3793df72-90ca-4288-8df1-bf459c88385f"} 
                className={classes.avatar}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {"Sign in"}
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => {
                            mailChange(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if(e.key === "Enter"){
                                onLogin(mail, password)
                            }
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            passChange(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if(e.key === "Enter"){
                                onLogin(mail, password)
                            }
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <div style={{ color: theme.color.errorColor, fontWeight: "bold" }} >{error && error}</div>
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => onLogin(mail, password)}
                    >
                        {"Sign In"}
                    </Button>
                    <LinksContainer>
                        <Link href="#" variant="body2">
                            {"Forgot password?"}
                        </Link>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </LinksContainer>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;