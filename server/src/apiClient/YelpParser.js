class YelpParser {
  
  static parseData (responseBody) {
    const parsedResponse = JSON.parse(responseBody)
    const lowRatedBusinesses = parsedResponse.businesses.filter((business) => {
      return business.rating < 3
    })

    const cleanedBusinesses = lowRatedBusinesses.map(business => {
      let id = business.id
      let name = business.name
      let url = business.url
      let rating = business.rating
      let image = business.image_url
      let location = business.location.display_address
      let price = business.price
      let category = business.categories[0].title
      let distance = business.distance



      return {
        id, name, url, rating, image, location, price, category, distance
      }
    })
    return cleanedBusinesses
  }

}
export default YelpParser