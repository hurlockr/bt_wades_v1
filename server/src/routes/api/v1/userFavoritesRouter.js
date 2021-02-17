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

userFavoritesRouter.post("/", async (req, res) => {
 debugger
  const { body } = req
  // req.user gives us current signed in user
  // make query to associate user and place that is passed through `body`
  // await place.$relatedQuery("users")
  // await user.$relatedQuery("userFavorites")

  try {
    
    
    debugger
    return res.status(201).json({  })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    } else {
      return res.status(500).json({ errors: error })
    }
  }
})

export default userFavoritesRouter