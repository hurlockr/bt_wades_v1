import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"

import PlaceTile from "./PlaceTile"

const PlacesList = (props) => {
  const placeDetails = props.location.state.places.yelpQueryResults
  const [place, setPlace] = useState({})
  const [errors, setErrors] = useState({})
  
  
  
  const savePlace = async (placePayload) => {
    try {
      const response = await fetch("/api/v1/user-favorites", {
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
      console.log("BODY FROM SAVEPLACE")
      console.log(body.place)
      setPlace(body.place)
      console.log("NEW PLACE STATE")
      console.log(place)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
  
  const placeTiles = placeDetails.map(place => {
    return (
    <PlaceTile 
      key={place.id}
      distance={place.distance}
      id={place.id}
      image={place.image}
      location={place.location}
      name={place.name}
      price={place.price}
      rating={place.rating}
      url={place.url}
      savePlace={savePlace}
    />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 masonry-css">
          {placeTiles}
      </div>
    </div>
  )
}

export default PlacesList

