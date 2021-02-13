import React from "react"

import PlaceTile from "./PlaceTile"

const PlacesList = (props) => {
  const placeDetails = props.location.state.places.yelpQueryResults
  console.log('PLACE DETAILS IN PLACES LIST')
  console.log(placeDetails)
  
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
    <div>
    <h1>Hello from Places List!</h1>
    {placeTiles}
    </div>
  )
}

export default PlacesList

