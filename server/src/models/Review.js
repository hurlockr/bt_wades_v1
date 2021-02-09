const Model = require ("./Model")

class Review extends Model {
  static get tableName() {
    return "reviews"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["placeId"],
      properties: {
        placeId: { type: ["integer", "string"] },
        rating: { type: ["integer", "string"] },
        text: { type: "string" },
        name: { type: "string" }

      }
    }
  }

  static get relationMappings() {
    const { Place } = require ("./index")

    return {
      place: {
        relation: Model.BelongsToOneRelation,
        modelClass: Place,
        join: {
          from: "reviews.placeId",
          to: "place.id"
        }
      }
    }
  }
}

module.exports = Review