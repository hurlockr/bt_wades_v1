import got from "got"
import config from "../config.js"
import yelpParser from "./yelpParser.js"


const yelpApiKey = config.yelpApiKey.secret

class YelpClient {
  static async getPlaces(searchParams) {
    console.log(searchParams)
    //in the future only provide params to my url if those exist in search params
    try {
      const url = `https://api.yelp.com/v3/businesses/search?location=${searchParams.zip}&price=${searchParams.price}&term=${searchParams.term}&categories=${searchParams.category}`
      const apiResponse = await got(url, {
        'headers': {
          'Authorization': `Bearer ${yelpApiKey}`
        }
      })
      const responseBody = apiResponse.body
      // yelpParser(responseBody)
      console.log(responseBody)
      return responseBody //going to return giant array of objects
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default YelpClient