/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("places", (table) => {
    table.bigIncrements("id").primary()
    table.string("name").notNullable()
    table.text("url")
    table.float("rating")
    table.string("image")
    table.string("location").notNullable()
    table.string("price")
    table.float("distance")
    table.string("yelpId")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("places")
}
