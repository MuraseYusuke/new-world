import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: 16,
    marginBottom: 0,
    minWidth: 345,
  },
});

interface Props {
  image: string,
  title: string,
  text: string,
  onClick: () => void,
}

export default function ImgMediaCard(props: Props) {
  const classes = useStyles({});

  const {
    image,
    title,
    text,
    onClick,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea
        onClick={onClick}
      >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

interface SimpleCardProps extends Props {
  style?: React.CSSProperties;
};

export const SimpleCard = (props: SimpleCardProps) => {
  const {
    title,
    text,
    image,
    onClick,
    style,
  } = props;
  return (
    <Card
      style={{
        ...style
      }}
    >
      <CardActionArea
        onClick={onClick}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={image}
            title="Contemplative Reptile"
            style={{
              width: 100,
              height: 100,
            }}
          />
          <CardContent
            style={{
              padding: 8,
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h4"
              style={{
                padding: 0,
                margin: 0
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {text}
            </Typography>
            <Rating />

          </CardContent>
        </div>
      </CardActionArea>
    </Card>

  );
}