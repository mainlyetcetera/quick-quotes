import React from 'react'
import './Selector.css'

const Selector = () => {
  return (
    <form>
      <select
        className='select-box'
      >
        <option value=''>
          Please pick a category
        </option>
      </select>
    </form>
  )
}

export default Selector
