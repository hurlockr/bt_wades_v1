import React from "react"

import PlaceTile from "./PlaceTile"

const PlacesList = (props) => {
  const placeDetails = props.location.state.places.yelpQueryResults
  
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
    />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x small-up-2 medium-up-3">
          {placeTiles}
      </div>
    </div>
  )
}

export default PlacesList

