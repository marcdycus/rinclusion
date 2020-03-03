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
    maxWidth: 500,
    border: "2px solid black",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px black"
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
          image={props.image}
          title={props.name}
          style={{ height: "400px" }}
        />
        <CardContent>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ color: "black" }}
            >
              {props.name}
            </Typography>
          </a>
          {/* <hr /> */}
          <Typography variant="body2" color="textSecondary" component="p">
            <h6>{props.location.address1}</h6>
            <h6>
              {props.location.city}, {props.location.state}{" "}
              {props.location.zip_code}
            </h6>
            <hr />
            Price: {props.price}
            {/* <hr /> */}
            <br />
            Cuisine Type: {props.categories}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Fab
          style={{ backgroundColor: "red" }}
          aria-label="dislike"
          onClick={props.onClickTwo}
        >
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
