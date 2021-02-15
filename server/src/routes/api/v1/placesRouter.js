import express from "express"
import objection from "objection"
const { ValidationError } = objection


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
  console.log("RESPONSE FROM PLACESROUTER")
  console.log(body)
  try {
    const place = await body
    debugger
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