import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { default as MPaper } from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  }),
);

interface Props {
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function Paper(props: Props) {
  const classes = useStyles({});
  const {
      style,
    children
  } = props;

  return (
    <MPaper style={style} className={classes.root}>
      {children}
    </MPaper>
  );
}
