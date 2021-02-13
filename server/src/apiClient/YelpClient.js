import got from "got"
import config from "../config.js"
import YelpParser from "./YelpParser.js"


const yelpApiKey = config.yelpApiKey.secret

class YelpClient {
  static async getPlaces(searchParams) {
    try {
      const url = `https://api.yelp.com/v3/businesses/search?location=${searchParams.zip}&price=${searchParams.price}&term=${searchParams.term}&categories=${searchParams.category}`
      const apiResponse = await got(url, {
        'headers': {
          'Authorization': `Bearer ${yelpApiKey}`
        }
      })
      const responseBody = apiResponse.body
      const parsedYelpData = YelpParser.parseData(responseBody)
      console.log('YELP CLIENT PARSED YELP DATA')
      console.log(parsedYelpData)
      return parsedYelpData
    } catch (error) {
      return { error: error.message }
    }
  }
}

export default YelpClient