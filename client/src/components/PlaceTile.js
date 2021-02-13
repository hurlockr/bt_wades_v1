import React from "react"

const PlaceTile = (props) => {
  const { distance, id, image, location, name, price, rating } = props
  const getLocation = location.join(' ')
  
  return (
    <div className="place-tile">
      <h2>{name}</h2>
      <img src={image}/>
      <p>{price}</p>
      <p>{rating}</p>
      <p>{getLocation}</p>
      <p>{distance}</p>
    </div>
  )
}

export default PlaceTile