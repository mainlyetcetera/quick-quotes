import React, { useState, useEffect } from 'react'
import Header from '../Header/Header.js'
import Message from '../Message/Message.js'
import Selector from '../Selector/Selector.js'
import { fetchData } from '../../utils/api.js'
import './App.css'

const App = () => {
  const [category, setCategory] = useState(null)
  const [quote, setQuote] = useState(null)

  // method to update the chosen category, passed to Selector 
  const chooseCategory = choice => {
    setCategory(choice)
  }

  // also determine the quote, and pass that to message
  const generateQuote = async () => {
    const url = `https://api.quotable.io/random?tags=${category}`
    const data = await fetchData(url)
    console.log('quote data', data)
    setQuote(data)
  }

  /*
  useEffect(() => {
    const generateQuote = async () => {
      const url = `https://api.quotable.io/random?tags=${category}`
      const data = await fetchData(url)
      console.log('quote data', data)
      setQuote(data)
    }

    generateQuote()
  }, [])
  */
  
  return (
    <div>
      <Header />
      <Selector 
        chooseCategory={chooseCategory}
        />
      <Message />
    </div>
  )
}

export default App
