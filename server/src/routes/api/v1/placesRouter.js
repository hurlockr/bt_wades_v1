// import express from "express"
// import { Place } from "../../../models/index.js"

// const placesRouter = new express.Router()

// placesRouter.post("/", async (req, res) => {
//   const locations = req.body 
// })

const request = require('request');
let options = {
  'method': 'GET',
  'url': 'https://api.yelp.com/v3/businesses/search?location=Boston',
  'headers': {
    'Authorization': 'Bearer oUeuQhjAB0oB6Qe0d1Tw34Rp2_E6tFE0aXpZHa-3hJbAdN-uMcPdK5aHIs-gNFCd9VJtV8T0tyO1BMokpXobe6PK58ptnAnCAZilraFQnu9z8-0sKMn_K0bTEIIVYHYx'
  }
};
request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});