import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

// import * as firebase from "firebase";


const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function ChangeEmail(props) {
  const classes = useStyles();
  const {
    email,
    handleInputChange,
    handleFormSubmit
  } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <form
        className={classes.root}
        autoComplete="off"
        style={
          ({ textAlign: "center" },
          { padding: "50px" },
          { maxWidth: "100%" },
          { marginTop: "30px" })
        }
      >
        <Container 
            style={{
                marginTop:"50px",
                marginBottom:"100px"
            }}
        
        >
          <h5
            style={{
                float:"left"
            }}
          >Change Email:</h5>
          <TextField
            style={{ marginBottom: "20px"}}
            id="outlined-basic"
            variant="outlined"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            label="Email"
          />
        
        <Button
          variant="contained"
          style={{ backgroundColor: "red", float:"right" }}
          onClick={handleFormSubmit}
        >
          Change Email
        </Button>
        </Container>
      </form>
    </div>
  );
}

export default ChangeEmail;