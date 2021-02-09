// include all of your models here using CommonJS requires
const User = require("./User.js")
const Place = require("./Place.js")
const Review = require("./Review.js")
const UserFavoritePlace = require("./UserFavoritePlace")

module.exports = { User, Place, Review, UserFavoritePlace };
