/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email", "username"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "username"],

      properties: {
        email: { type: "string" },
        username: { type: "string" },
        cryptedPassword: { type: "string" },
      },
    };
  }

  static get relationMappings() {
    const { Place, UserFavoritePlace } = require ("./index")

    return {
      places: {
        relation: Model.ManyToManyRelation,
        modelClass: Place,
        join: {
          from: "users.id",
          through: {
            from: "userFavoritePlaces.userId",
            to: "userFavoritePlaces.placeId"
          },
          to: "places.id"
        }
      },
      userFavoritePlaces: {
        relation: Model.HasManyRelation,
        modelClass: UserFavoritePlace,
        join: {
          from: "users.id",
          to: "userFavoritePlaces.userId"
        }
      }
    }
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
