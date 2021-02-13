import express from "express"
import YelpClient from "../../../apiClient/YelpClient.js"
import objection from "objection"
const { ValidationError } = objection


const yelpRouter = new express.Router()

yelpRouter.get("/", async (req, res) => {
  try {
    const response = await YelpClient.getPlaces()
    return res.status(200).json({ response })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

yelpRouter.post("/", async (req, res) => {
  const { body } = req

  try {
    const yelpQueryResults = await YelpClient.getPlaces(body)
    console.log('YELP QUERY RESULTS')
    console.log(yelpQueryResults)
    return res.status(201).json({ yelpQueryResults }) 
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default yelpRouter