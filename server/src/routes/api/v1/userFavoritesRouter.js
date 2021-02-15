import express from "express"
import objection from "objection"
const { ValidationError } = objection


const userFavoritesRouter = new express.Router()

userFavoritesRouter.get("/", async (req, res) => {
  try {
    return res.status(200).json({ body })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default userFavoritesRouter