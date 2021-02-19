import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

const clientRoutes = ["/", "/user-sessions/new", "/users/new", "/places", "/yelp", "/user-favorites", "/api/v1/places"];

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router;
