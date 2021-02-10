import express from "express"
import YelpClient from "../../../apiClient/YelpClient.js"

const yelpRouter = new express.Router()

yelpRouter.get("/yelp", async (req, res) => {
  try {
    const response = await YelpClient.getPlaces()
    return res.status(200).json({ response })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default yelpRouter