import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const PlaceTile = (props) => {
  const { distance, id, image, location, name, price, rating, url } = props
  const getLocation = location.join(' ')
  const [place, setPlace] = useState({
    distance: "",
    id: "",
    image: "",
    location: "",
    name: "",
    price: "",
    rating: "",
    url: ""
  })

  const savePlace = async (placePayload) => {
    debugger
    try {
      debugger
      const response = await fetch("/api/v1/places", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(placePayload)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
      const body = await response.json()
      setPlace(body)
      debugger
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  
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
        <FavoriteBorderIcon 
        className="fav-icon" 
        fontSize="large"
        onClick={savePlace}
        />
        </div>
      </div>
    </div>
  )
}

export default PlaceTile