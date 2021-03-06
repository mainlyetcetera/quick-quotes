import React, { useState } from 'react'
import Header from '../Header/Header.js'
import Message from '../Message/Message.js'
import Selector from '../Selector/Selector.js'
import Details from '../Details/Details.js'
import Error from '../Error/Error.js'
import { Route } from 'react-router-dom'
import { fetchData } from '../../utils/api.js'
import './App.css'

const App = () => {
  const [category, setCategory] = useState(null)
  const [info, setInfo] = useState({
    tags: [],
    content: '',
    author: ''
  })
  const [quote, setQuote] = useState(null)
  const [err, setErr] = useState(null)

  const chooseCategory = choice => {
    setCategory(choice)
  }

  const generateQuote = async () => {
    try {
      const url = `https://api.quotable.io/random?tags=${category}`
      const data = await fetchData(url)
      setInfo({
        tags: data.tags,
        content: data.content,
        author: data.author
      })
      setQuote(data.content)
    } catch (err) {
      setErr({
        status: err.status,
        text: err.statusText
      })
    }
  }

  return (
    <div>
      <Header />
      <Route
        exact path='/details'
        render={() => {
          return (
            <Details 
              info={info}
            />
          )
        }}
      />
      <Route
        exact path='/'
        render={() => {
          return !err ? (
            <div>
              <Selector 
                chooseCategory={chooseCategory}
                generateQuote={generateQuote}
              />
              <Message 
                quote={quote}
              />
            </div>
          ) : (
            <Error status={err.status} text={err.text}/>
          )
        }}
      />
    </div>
  )
}

export default App
