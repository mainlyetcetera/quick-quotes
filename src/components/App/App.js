import React from 'react'
import Header from '../Header/Header.js'
import Message from '../Message/Message.js'
import Selector from '../Selector/Selector.js'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Header />
      <Selector />
      <Message />
    </div>
  )
}

export default App;
