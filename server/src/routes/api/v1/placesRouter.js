import express from "express"
import objection from "objection"
const { ValidationError } = objection

import Place from "../../../models/Place.js"


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
  const userId = req.user.id
  console.log("RESPONSE FROM PLACESROUTER")
  console.log(body)
  try {
    const place = await Place.query().insertAndFetch({
      distance: body.distance,
      id: body.id,
      image: body.image,
      location: body.location,
      name: body.name,
      price: body.price,
      rating: body.rating,
      url: body.url
    })
    return res.status(201).json({ place })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default placesRouter