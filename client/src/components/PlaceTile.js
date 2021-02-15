import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const PlaceTile = (props) => {
  const { distance, id, image, location, name, price, rating, url } = props
  const getLocation = location.join(' ')
  const [place, setPlace] = useState({})

  const favoritePlace = event => {
    event.preventDefault()
    props.savePlace(props)
  }
  
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
        <FavoriteBorderIcon 
        className="fav-icon" 
        fontSize="large"
        place={place}
        onClick={favoritePlace}
        />
        </div>
      </div>
    </div>
  )
}

export default PlaceTile