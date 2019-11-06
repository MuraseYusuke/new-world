import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { default as MAppBar } from '@material-ui/core/AppBar';
import {
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { theme } from './../theme';
import { compose, defaultProps } from 'recompose';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface Props {
  title: string,
  buttonLabel: string,
  onMenuClick: () => void,
}

const AppBar = compose<Props, Props>(
  defaultProps<Partial<Props>>({
    title: "NEW WORLD",
    buttonLabel: "ログイン"
  })
)(
  function AppBar(props: Props) {
    const classes = useStyles(theme);

    const {
      title,
      buttonLabel,
      onMenuClick,
    } = props;

    return (
      <div className={classes.root}>
        <MAppBar
          position="static"
          style={{
            backgroundColor: theme.primaryColor,
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                onMenuClick();
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button color="inherit">{buttonLabel}</Button>
          </Toolbar>
        </MAppBar>
      </div>
    );
  }
);

export default AppBar;