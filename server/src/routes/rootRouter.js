import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import placesRouter from "./api/v1/placesRouter.js";
import yelpRouter from "./api/v1/yelpRouter.js";
import userFavoritesRouter from "./api/v1/userFavoritesRouter.js"
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/yelp", yelpRouter);
rootRouter.use("/api/v1/places", placesRouter);
rootRouter.use("/api/v1/user-favorites", userFavoritesRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); //place your server-side routes here

export default rootRouter;
