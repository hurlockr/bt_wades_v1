/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("reviews", (table) => {
    table.bigIncrements("id").primary()
    table.bigInteger("placeId").unsigned().notNullable().index().references("places.id")
    table.integer("rating")
    table.string("text")
    table.string("name")
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("reviews")
}
