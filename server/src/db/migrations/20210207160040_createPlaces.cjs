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
    table.string("location").notNullable()
    table.string("rating")
    table.string("image")
    table.string("price")
    table.string("url")
    table.json("location")
    table.json("hours")
    table.string("yelpId")
    table.json("reviewId")
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
