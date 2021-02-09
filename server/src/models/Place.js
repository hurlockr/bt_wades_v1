const Model = require("./Model")

class Place extends Model {
  static get tableName() {
    return "places"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "address"],
      properties: {
        name: { type: "string" },
        type: { type: "string" },
        address: { type: "string" },
        rating: { type: ["integer", "string"] },
        image: { type: "string" },
        price: { type: "string" },
        url: { type: "string" },
        hours: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { Review } = require("./index")

    return {
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "places.id",
          to: "reviews.placeId"
        }
      }
    }
  }
}

module.exports = Place