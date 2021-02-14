import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from '@material-ui/core/Typography';


const PlaceTile = (props) => {
  const { distance, id, image, location, name, price, rating, url } = props
  const getLocation = location.join(' ')
  
  
  
  
  
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
        <p>Address: {getLocation}</p>
        <a href={url}>See their Business on Yelp</a>
        <p>Distance from you: {distance}</p>
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
        </div>
      </div>
    </div>
  )
}

export default PlaceTile