const Model = require("./Model")

class Place extends Model {
  static get tableName() {
    return "places"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location"],
      properties: {
        name: { type: "string" },
        type: { type: "string" },
        location: { type: "string" },
        rating: { type: "number" },
        distance: { type: "number" },
        image: { type: "string" },
        price: { type: "string" },
        url: { type: "string" },
        yelpId: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { Review, User, UserFavoritePlace } = require("./index")

    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "places.id",
          to: "reviews.placeId"
        }
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "places.id",
          through: {
            from: "userFavoritePlaces.placeId",
            to: "userFavoritePlaces.userId"
          },
          to: "users.id"
        }
      },
      userFavoritePlaces: {
        relation: Model.HasManyRelation,
        modelClass: UserFavoritePlace,
        join: {
          from: "places.id",
          to: "userFavoritePlaces.placeId"
        }
      }
    }
  }
}

module.exports = Place