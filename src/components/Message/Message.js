import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Message.css'

const Message = ({quote, favoriteQuote}) => {
  return (
    <div>
      {!quote && <h3>Something clever will go here soon...</h3>}
      {quote && 
        <section>
          <h3>{quote}</h3>
          <Link
            className='details-btn'
            to='/details'
          >
          Get Details Here!
          </Link>
          <button
            onClick={() => favoriteQuote()}
          >
          Favorite this!
          </button>
        </section>
      }
    </div>
  )
}

export default Message

Message.propTypes = {
  quote: PropTypes.string,
  favoriteQuote: PropTypes.func
}
