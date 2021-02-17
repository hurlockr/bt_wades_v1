import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Place, UserFavoritePlace } from "../../../models/index.js"
const userFavoritesRouter = new express.Router()

userFavoritesRouter.get("/", async (req, res) => {
  const user = req.user
  
  try {
    const favoritePlaces = await user.$relatedQuery("places")
    return res.status(200).json({ favoritePlaces })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

userFavoritesRouter.post("/", async (req, res) => {
    const { body } = req
    const userId = req.user.id
    const { distance, id, image, location, name, price, rating, url } = body
    const fixedLocation = location.join(' ')
  try {
    const placeData = {
      distance, 
      yelpId: id,
      image, 
      location: fixedLocation, 
      name,
      price, 
      rating, 
      url
    }
    
    let place = await Place.query().findOne(placeData)
    if (!place) {
      place = await Place.query().insertAndFetch(placeData)
    }
    await UserFavoritePlace.query().insert({ placeId: place.id, userId: userId })
    console.log("New Place Added, Yay!")
    return res.status(201).json({ place: place })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      console.error(error)
      return res.status(500).json({ errors: error })
    }
  }
})

export default userFavoritesRouter