import React, { useState } from "react"
import { Redirect } from "react-router-dom"


const YelpRequestForm = (props) => {
  const [yelpParams, setYelpParams] = useState({})
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
        const body = await response.json()
        setYelpParams(body)
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
    
    }
    if (shouldRedirect) {
      return(<Redirect 
        to={{
          pathname: "/places",
          state: { places: yelpParams } 
        }}
      />)
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
  <form onSubmit={handleSubmit}>
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="medium-6 small-12 cell">
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
        </div>
        <div className="medium-6 small-12 cell">
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
        </div>
        <div className="medium-6 small-12 cell">
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
        </div>
        <div className="medium-6 small-12 cell">
          <label htmlFor="price">
            <p>Price:</p>
            <input 
            id="price"
            type="text"
            name="price"
            placeholder="let's discuss the bottom line (numbers signs only)"
            onChange={handleInputChange}
            value={requestParams.price}
            />
          </label>
        </div>
        <div className="button1">
          <input className="button" type="submit" value="Submit"/>
        </div>
      </div>
    </div>
  </form>
  )
} 

export default YelpRequestForm