import express from "express"

const placesRouter = new express.Router()

placesRouter.get("/", async (req, res) => {
  try {
    return res.status(200).json({ body })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default placesRouter