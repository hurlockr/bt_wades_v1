import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";


const FavoritePlaceTile = (props) => {
  debugger
  const { distance, id, image, location, name, price, rating, url } = props
  const [place, setPlace] = useState({})
  
  return (
    <div className="cell">
      <div className="masonry-css">
      <div className="card">
        <div className="card-divider">
          <h2>{name}</h2>
        </div>
          <img src={image} alt="Business Header Image"/>
        <div className="card-section">
        <p>Price: {price}</p>
        <Typography component="legend">Rating</Typography>
        <Rating name="read-only" value={rating} precision={0.5} readOnly />
        <div className="row">
        <p>Address: {location}</p>
        </div>
        <a href={url}>See their Business on Yelp</a>
        <p>Distance from you: {distance}</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default FavoritePlaceTile