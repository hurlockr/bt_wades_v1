class yelpParser {
  static async (responseBody) {
    const parsedResponse = JSON.parse(responseBody)
    return parsedResponse
  }

}
export default yelpParser