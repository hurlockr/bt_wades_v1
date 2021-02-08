/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("places", (table) => {
    table.bigIncrements("id").primary() //uuid?
    table.string("name").notNullable()
    table.json("type") //arr?
    table.string("address").notNullable()
    table.integer("rating")
    table.string("image")
    table.string("price")
    table.string("url")
    table.json("hours")
    table.json("externalReviews")
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
