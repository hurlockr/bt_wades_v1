import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { pink } from '@material-ui/core/colors';


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
        <p>Address: {getLocation}</p>
        </div>
        <a href={url}>See their Business on Yelp</a>
        <p>Distance from you in Km: {distance}</p>
        <FavoriteIcon
        className="fas fa-heart"
        fontSize="large"
        place={place}
        onClick={favoritePlace}

        />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default PlaceTile