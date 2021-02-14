import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Icons from "@material-ui/icons";


const PlaceTile = (props) => {
  const { distance, id, image, location, name, price, rating, url } = props
  const getLocation = location.join(' ')
  
  //each time you click add the favorites you concatinate then add to state 
  return (
    <div className="cell">
      <div className="card">
        <div className="card-divider">
          <h2>{name}</h2>
        </div>
        <div className="card-section">
          <div className="card-image">
            <img src={image} alt="Business Header Image"/>
          </div>
        </div>
        <div className="card-section">
        <p>Price: {price}</p>
        <Typography component="legend">Rating</Typography>
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
        <p>Address: {getLocation}</p>
        <a href={url}>See their Business on Yelp</a>
        <p>Distance from you: {distance}</p>
        
        </div>
      </div>
    </div>
  )
}

export default PlaceTile