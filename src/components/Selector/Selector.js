import React, { useState, useEffect } from 'react'
import './Selector.css'
import { fetchData } from '../../utils/api.js'

const Selector = () => {
  const [quote, setQuote] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const generateCategories = async () => {
      const url = 'https://api.quotable.io/tags'
      const data = await fetchData(url)
      setCategories(data)
    }

    generateCategories()
  }, [])

  useEffect(() => {
    const result = async () => {
      const url = 'https://api.quotable.io/random'
      const data = await fetchData(url)
      setQuote(data.content)
    }

    result()
  }, [])

  const displayCategories = () => {
    return categories.map(category => {
      const {name, quoteCount, _id} = category
      let result
      if (quoteCount) { 
        result = (
          <option 
            value={name}
            key={_id}
          >
          {name}
          </option>
        )
      }

      return result
    })
  }

  return (
    <div>
      <h2>{quote}</h2>
      <form>
        <select
          className='select-box'
        >
          <option value=''>
            Please pick a category
          </option>
          {
            displayCategories()
          }
        </select>
      </form>
    </div>
  )
}

export default Selector
