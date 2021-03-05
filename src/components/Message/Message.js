import React from 'react'
import './Message.css'

const Message = ({quote}) => {
  return (
    <div>
      {!quote && <h3>Something clever will go here soon...</h3>}
      {quote && 
        <section>
          <h3>{quote}</h3>
          <button
            className='details-btn'
          >
          Get Details Here!
          </button>
        </section>
      }
    </div>
  )
}

export default Message
