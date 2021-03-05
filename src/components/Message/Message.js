import React from 'react'
import './Message.css'

const Message = ({quote}) => {
  return (
    <div>
      {!quote && <h3>Something clever will go here soon...</h3>}
      {quote && <h3>{quote}</h3>}
      <button></button>
    </div>
  )
}

export default Message
