class PlaceSerializer {
  static async getSummary(place) {
    const allowedAttributes = ["distance", "id", "image", "location", "name", "price", "rating", "url"]
    fixedLocation = place.location.join(' ')
    let serializedPlace = {}
    for (const attribute of allowedAttributes) {
      serializedPlace[attribute] = place[attribute]
    }
    //insert $relatedQuery for Reviews here
    return serializedPlace
  }
}
export default PlaceSerializer