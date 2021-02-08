/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("userFavoritePlaces", (table) => {
    table.bigIncrements("id").primary()
    table.bigInteger("placeId").unsigned().notNullable().index().references("places.id")
    table.bigInteger("userId").unsigned().notNullable().index().references("users.id")
    table.string("notes")
    table.integer("personalRating")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("userFavoritePlaces")
}
