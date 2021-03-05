import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Message from '../Message/Message.js'
import Selector from '../Selector/Selector.js'
import { fetchData } from '../../utils/api.js'
import './App.css'

const App = () => {
  const [category, setCategory] = useState(null)
  const [quote, setQuote] = useState(null)

  const chooseCategory = choice => {
    setCategory(choice)
  }

  const generateQuote = async () => {
    const url = `https://api.quotable.io/random?tags=${category}`
    const data = await fetchData(url)
    setQuote(data.content)
  }
  
  return (
    <div>
      <Header />
      <Selector 
        chooseCategory={chooseCategory}
        generateQuote={generateQuote}
      />
      <Message 
        quote={quote}
      />
    </div>
  )
}

export default App
