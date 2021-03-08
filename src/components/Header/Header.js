import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => (
  <header>
    <h1>QuickQuotes</h1>
    <h2>Welcome!</h2>
    <Link to='/'>To Home</Link>
    <Link to='/favorites'>To Favorites</Link>
  </header>
)

export default Header
