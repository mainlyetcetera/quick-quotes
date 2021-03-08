import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Selector.css'
import { fetchData } from '../../utils/api.js'
import capitalize from '../../utils/capitalize.js'

const Selector = ({chooseCategory, generateQuote}) => {
  const [categories, setCategories] = useState([])
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    const generateCategories = async () => {
      const url = 'https://api.quotable.io/tags'
      const data = await fetchData(url)
      setCategories(data)
    }

    generateCategories()
  }, [])

  const displayCategories = () => (
    categories.map(category => {
      const {name, quoteCount, _id} = category
      return quoteCount ? (
        <option 
          value={name}
          key={_id}
        >
        {capitalize(name)}
        </option>
      ) : null
    })
  )

  const handleChange = e => {
    chooseCategory(e.target.value)
    e.target.value !== '' ? setButtonDisabled(false) : setButtonDisabled(true)
  }

  return (
    <div>
      <form>
        <select
          onChange={e => handleChange(e)}
        >
          <option value=''>
            Please pick a category
          </option>
          {displayCategories()}
        </select>
        <button
          className='select-btn'
          onClick={e => {
            e.preventDefault()
            generateQuote()
          }}
          disabled={buttonDisabled}
        ></button>
      </form>
    </div>
  )
}

export default Selector

Selector.propTypes = {
  chooseCategory: PropTypes.func,
  generateQuote: PropTypes.func
} 
