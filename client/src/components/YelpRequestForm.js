import React, { useState } from "react"

const YelpRequestForm = (props) => {
  const [requestParams, setRequestParams] = useState({
    zip: "",
    category: "",
    term: "",
    price: ""
  })

  const queryYelp = async (requestPayload) => {
    try {
      const response = await fetch("/api/v1/yelp", {
        
      })
    } catch (error) {
      
    }
  }

  const handleInputChange = (event) => {
    setRequestParams({ 
      ...requestParams,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  return (
    <div className="form">
      <form >
        <label>
          <p>Zipcode:</p>
          <input 
          type="text"
          name="zip"
          placeholder="what's your zip?"
          onChange={handleInputChange}
          value={requestParams.zip}
          />
        </label>
        <label>
          <p>Category:</p>
          <input 
          type="text"
          name="category"
          placeholder="what type of place?"
          onChange={handleInputChange}
          value={requestParams.category}
          />
        </label>
        <label>
          <p>Term:</p>
          <input 
          type="text"
          name="term"
          placeholder="name of restaurant, type of food, type of venue"
          value={requestParams.term}
          />
        </label>
        <label>
          <p>Price:</p>
          <input 
          type="text"
          name="price"
          placeholder="let's discuss the bottom line ($ signs only)"
          value={requestParams.price}
          />
        </label>
        <div>
          <input className="button" type="submit" value="Submit"/>
        </div>
      </form> 
    </div>
  )
} 

export default YelpRequestForm