import React, { useState, useEffect } from 'react'
import './Selector.css'
import { fetchData } from '../../utils/api.js'
import capitalize from '../../utils/capitalize.js'

const Selector = ({chooseCategory, generateQuote}) => {
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

  const displayCategories = () => (
    categories.map(category => {
      const {quoteCount, _id} = category
      let {name} = category
      let result
      name = capitalize(name) 
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
  )

  return (
    <div>
      <h2>{quote}</h2>
      <form>
        <select
          onChange={e => chooseCategory(e.target.value)}
        >
          <option value=''>
            Please pick a category
          </option>
          {displayCategories()}
        </select>
      <button
        onClick={e => {
          e.preventDefault()
          generateQuote()
        }}
      ></button>
      </form>
    </div>
  )
}

export default Selector
