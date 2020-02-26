import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Fab
} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";

// import "./styles.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 500
  },
  media: {
    height: 500
  }
});

function RestaurantCard(props) {
  const classes = useStyles();

  return (
    <Card
      style={
        ({ textAlign: "center" },
        { width: "500px" },
        { minWidth: "300px" },
        { margin: "20px auto" })
      }
      className={classes.root}
      mx="auto"
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image="https://s3-media0.fl.yelpcdn.com/bphoto/-8q8k2VzHo_KzBCzNCBcAg/o.jpg"
          image={props.image}
          // title="Restaurant Sample"
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Fab color="secondary" aria-label="dislike" onClick={props.onClickTwo}>
          <CloseRoundedIcon />
        </Fab>
        <Fab
          style={{ color: "white", backgroundColor: "green" }}
          aria-label="like"
          id={props.id}
          onClick={props.onClickOne}
        >
          <CheckRoundedIcon />
        </Fab>
      </CardActions>
    </Card>
  );
}

export default RestaurantCard;
