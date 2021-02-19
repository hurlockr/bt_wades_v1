import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { Popconfirm, message } from "antd"
import { withSuccess } from "antd/lib/modal/confirm";


const FavoritePlaceTile = (props) => {
  const { distance, id, image, location, name, price, rating, url, updateTiles } = props
  const [place, setPlace] = useState({})
  const success = () => {
    message.success("that place wasn't wonderfully-horrible enough for you anyway!")
  }

  const deletePlace = async () => {
    try {
      const response = await fetch("/api/v1/user-favorites", {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ id })
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
      success()
      updateTiles()
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
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
        <p>Address: {location}</p>
        </div>
        <a href={url}>See their Business on Yelp</a>
        <p>Distance from you: {distance}</p>
        <div className="button1">
          <button className="button">
            <Popconfirm 
              title="are you sure you want to delete?" 
              okText="yes" 
              cancelText="no"
              onConfirm={deletePlace}
              >Delete</Popconfirm>
          </button>
        </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default FavoritePlaceTile