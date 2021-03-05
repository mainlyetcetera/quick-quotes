import React, { useState, useEffect } from 'react'
import Header from '../Header/Header.js'
import Message from '../Message/Message.js'
import Selector from '../Selector/Selector.js'
import './App.css'

const App = () => {
  const [category, setCategory] = useState(null)
  return (
    <div>
      <Header />
      <Selector />
      <Message />
    </div>
  )
}

export default App
