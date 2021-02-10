import got from "got"
import config from "../config.js"


const yelpApiKey = config.yelpApiKey.secret

class YelpClient {
  static async getPlaces() {
    try {
      const url = `https://api.yelp.com/v3/businesses/search?location=Boston`
      const apiResponse = await got(url, {
        'headers': {
          'Authorization': 'Bearer oUeuQhjAB0oB6Qe0d1Tw34Rp2_E6tFE0aXpZHa-3hJbAdN-uMcPdK5aHIs-gNFCd9VJtV8T0tyO1BMokpXobe6PK58ptnAnCAZilraFQnu9z8-0sKMn_K0bTEIIVYHYx'
        }
      })
      console.log(apiResponse)
      const responseBody = apiResponse.body
      console.log(apiResponse)
      return responseBody
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default YelpClient