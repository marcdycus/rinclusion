import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteButton from "../DeleteButton"

function PrevLiked(props) {
  return (
      <div style={{float:'right', width:"50%"}}>
          <h3>Liked Restaurants:</h3>
    <List className="list-group search-results" style={{width:"300px", textAlign:"center"}}>
      {props.liked.map(result => (
        <ListItem key={result.id} className="list-group-item" style={{ border:" 1px solid gray", borderRadius:"5px", margin:"10px", minHeight:"100px", minWidth:"300px", boxShadow:"0px 1px 3px gray" }}>
          <h5 dataId={result._id} style={{textAlign:"center", width:"100%", margin:"auto"}} name={result.name}>{result.name}</h5>
          <img
            alt="liked restaurants"
            src={result.image_url}
            className="img-fluid"
            style={{ height: "50px", width: "80px", borderRadius:"3px" }}
          />
         <DeleteButton dataId={result._id} />
        </ListItem>
      ))}
    </List>
    </div>
  );
}

export default PrevLiked;