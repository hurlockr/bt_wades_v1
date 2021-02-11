import React, { useState } from "react"
import { Redirect } from "react-router-dom"


const YelpRequestForm = (props) => {
  let body;
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [requestParams, setRequestParams] = useState({
    zip: "",
    category: "",
    term: "",
    price: ""
  })

  const queryYelp = async (requestPayload) => {
    try {
      const response = await fetch("/api/v1/yelp", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(requestPayload)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        } 
      } else {
        body = await response.json()
        setShouldRedirect(true)
        //should be giant object of results (but now parsed after being cleaned in the router)
        //props.location.state.body is how this will be retrieved in the LocationsList.js
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
    if (shouldRedirect) {
      return (<Redirect 
        to={{
          pathname: "/places",
          state: { body } 
        }}
      />)
    }
    
  }

  const handleInputChange = (event) => {
    setRequestParams({ 
      ...requestParams,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    queryYelp(requestParams)
  }

return (
  <div className="submission-form grid-container">
    <div className="grid-x grid-padding-x">
      <div className="small-12 medium-6 cell">
        <form onSubmit={handleSubmit}>
            <label htmlFor="zip">
              <p>Zipcode:</p>
              <input 
              id="zip"
              type="text"
              name="zip"
              placeholder="what's your zip?"
              onChange={handleInputChange}
              value={requestParams.zip}
              />
            </label>
            <label htmlFor="category">
              <p>Category:</p>
              <input 
              id="category"
              type="text"
              name="category"
              placeholder="what type of place?"
              onChange={handleInputChange}
              value={requestParams.category}
              />
            </label>
            <label htmlFor="term">
              <p>Term:</p>
              <input 
              id="term"
              type="text"
              name="term"
              placeholder="name of restaurant, type of food, type of venue"
              onChange={handleInputChange}
              value={requestParams.term}
              />
            </label>
            <label htmlFor="price">
              <p>Price:</p>
              <input 
              id="price"
              type="text"
              name="price"
              placeholder="let's discuss the bottom line ($ signs only)"
              onChange={handleInputChange}
              value={requestParams.price}
              />
            </label>
            <div>
              <input className="button" type="submit" value="Submit"/>
            </div>
        </form>
        </div>
      </div>  
  </div>
  )
} 

export default YelpRequestForm