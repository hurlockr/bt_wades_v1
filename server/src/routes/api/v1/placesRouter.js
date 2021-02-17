import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Place, UserFavoritePlace } from "../../../models/index.js"
import PlaceSerializer from "../../serializers/placeSerializer.js"


const placesRouter = new express.Router()

placesRouter.get("/", async (req, res) => {
  try {
    return res.status(200).json({ body })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

placesRouter.post("/", async (req, res) => {
  const { body } = req
  // const userId = req.user.id
  const { distance, id, image, location, name, price, rating, url } = body
  const fixedLocation = location.join(' ')
  // const fixedDistance = distance.toString()
  // const fixedRating = rating.toString()
  console.log("RESPONSE FROM PLACESROUTER")
  console.log(body)
  debugger
  try {
    const place = await Place.query().insertAndFetch({
      distance, 
      yelpId: id, 
      image, 
      location: fixedLocation, 
      name,
      price, 
      rating, 
      url
    })
    
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

export default placesRouter

// const letItBeSong = await Place.query().insert({ name: "DumbStarbucks", type: "Restaurant", address: "11 Pumpkin Spice ave.", rating: 2, image: "Imageurl", price: "$$", url: "www.DRUids.com.hotmail.cybermancers", hours: "none"})

// Place.query().insert({
//   name: body.name, type: "Restaurant", address: "13 Good Luck rd", rating: 3, image: body.image, price: body.price, url: "www.DRUids.com.hotmail.cybermancers", hours: "none"
// })