import express from "express"
import objection from "objection"
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

yelpRouter.post("/yelp", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { zip, category,term, price } = formInput

  try {
    const newQueryParams = await YelpClient.getPlaces().insertAndFetch({
    zip,
    category,
    term,
    price,
    })
    return res.status(201).json({ query: newQueryParams }) 
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default yelpRouter