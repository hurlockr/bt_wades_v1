import express from "express"
import objection from "objection"
import YelpClient from "../../../apiClient/YelpClient.js"


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
  // console.log(req)
  console.log(body)
  // console.log(req.params)
  // const formInput = body
  // const { zip, category,term, price } = formInput

  try {
    const yelpQueryResults = await YelpClient.getPlaces(body)
    let yelpObjects = []
    yelpQueryResults.businesses.forEach(business => {
      // push a custom object onto yelp objects that is cleaned up
      // business.info.name = name
        // insert other objects you'd need for your places data table
          // look for ignition activities that go over finding nested data 
    })
    // yelpQueryResults is currently JSON, need to parse using JSON.parse() 
    // from here I could clean up Yelp query results --> but this is a dream --> maybe with a serializer/parser? 
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