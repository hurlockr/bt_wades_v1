import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import { Select } from "antd";
import YelpCategories from "../../Data/YelpCategories"
import ErrorList from "./ErrorList"
import _ from "lodash"

const { Option } = Select;

const YelpRequestForm = (props) => {
  const [yelpParams, setYelpParams] = useState({})
  const [errors, setErrors] = useState([])
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

  const getCategories = YelpCategories.map(category => {
    return (
      <Option
      key={category}
      value={category}
      >{category}</Option>
    )
  })

  const handleCategoryChange = value => {
    setRequestParams({
      ...requestParams,
      category: value,
    })
    console.log(`selected ${value}`);
  }

  const handlePriceChange = value => {
    setRequestParams({
      ...requestParams,
      price: value,
    })
    console.log(`selected ${value}`);
  }

  const handleInputChange = (event) => {
    setRequestParams({
      ...requestParams,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const validateQueryParams = () => {
    let submitErrors = {}
    const requiredFields = ["zip", "category", "term", "price"]
    requiredFields.forEach((field) => {
      if (requestParams[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]:"is blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
    }
  

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateQueryParams()) {
      queryYelp(requestParams)
    }
  }

return (
  <form onSubmit={handleSubmit}>
    <ErrorList errors={errors} />
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="medium-6 small-12 cell">
          <label htmlFor="zip">
            Zipcode:
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
        <div className="medium-6 small-12 cell drop-down">
          <label htmlFor="category">
            <div className="drop-down-label">
            Category:
            </div>
            <Select
              id="category"
              showSearch
              placeholder="Select a category"
              optionFilterProp="children"
              onChange={handleCategoryChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
            {getCategories}
            </Select>
          </label>
        </div>
        <div className="medium-6 small-12 cell">
          <label htmlFor="term">
            Term:
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
        <div className="medium-6 small-12 cell drop-down">
          <label htmlFor="price">
            <div className="drop-down-label">
            Price:
            </div>
            <Select
              id="price"
              placeholder="Select a Price"
              onChange={handlePriceChange}
            >
              <Option value={1}>$</Option>
              <Option value={2}>$$</Option>
              <Option value={3}>$$$</Option>
              <Option value={4}>$$$$</Option>
            </Select>
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