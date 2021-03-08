import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Details.css'

const Details = ({info}) => {
  const {content, author, tags} = info
  return (
    <section>
      <article>Quote: {content}</article>
      <article>Author: {author}</article>
      <article>Categories: {tags}</article>
      <Link to='/'>Return</Link>
    </section>
  )
}

export default Details

Details.propTypes = {
  info: PropTypes.object
}
