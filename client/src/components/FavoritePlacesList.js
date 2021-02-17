import React, { useState, useEffect } from "react"
import translateServerErrors from "../services/translateServerErrors"

import FavoritePlaceTile from "./FavoritePlaceTile"

const FavoritePlacesList = (props) => {
  debugger
  const [places, setPlaces] = useState([])
  const [errors, setErrors] = useState({})

  const fetchFavoritePlaces = async () => {
    try {
      debugger
      const response = await fetch('/api/v1/user-favorites')
      debugger
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const favPlaceData = await response.json()
      setPlaces(favPlaceData.favoritePlaces)
      debugger
    } catch (error) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchFavoritePlaces()
  },[])

  const favPlaceTiles = places.map(place => {
    return (
    <FavoritePlaceTile 
      key={place.id}
      distance={place.distance}
      id={place.id}
      image={place.image}
      location={place.location}
      name={place.name}
      price={place.price}
      rating={place.rating}
      url={place.url}
    />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 masonry-css">
          {favPlaceTiles}
      </div>
    </div>
  )
}

export default FavoritePlacesList