import got from "got"
import config from "../config.js"


const yelpApiKey = config.yelpApiKey.secret

class YelpClient {
  static async getPlaces() {
    try {
      const url = `https://api.yelp.com/v3/businesses/search?`
      const apiResponse = await got(url, {
        'headers': {
          'Authorization': `Bearer ${yelpApiKey}`
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