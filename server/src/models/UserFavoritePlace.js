const Model = require ("./Model")

class UserFavoritePlace extends Model {
  static get tableName() {
    return "userFavoritePlaces"
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["placeId", "userId"],
      properties: {
        placeId: { type: ["integer", "string"] },
        userId: { type: ["integer", "string"] },
        notes: { type: "string" },
        personalRating: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    const { Place, User } = require ("./index")

    return {
      place: {
        relation: Model.BelongsToOneRelation,
        modelClass: Place,
        join: {
          from: "userFavoritePlaces.placeId",
          to: "place.id"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "userFavoritePlaces.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = UserFavoritePlace