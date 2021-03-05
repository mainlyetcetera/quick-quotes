import React from 'react'
import { Link } from 'react-router-dom'
import './Message.css'

const Message = ({quote}) => {
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
        </section>
      }
    </div>
  )
}

export default Message
