import React, { useState, useEffect } from 'react'
import './Selector.css'
import { fetchData } from '../../utils/api.js'

const Selector = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    const result = async () => {
      const url = 'https://api.quotable.io/random'
      const data = await fetchData(url)
      console.log(data)
      setQuote(data.content)
    }

    result()
  }, [])

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
        </select>
      </form>
    </div>
  )
}

export default Selector
