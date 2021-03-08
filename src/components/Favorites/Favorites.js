import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Favorites = ({favorites}) => {
  const toDisplay = favorites.map(favorite => {
    const {content, author, tags} = favorite
    return (
      <section>
        <article>Quote: {content}</article>
        <article>Author: {author}</article>
        <article>Categories: {tags}</article>
      </section>
    )
  })

  return <section>{toDisplay}</section>
}

export default Favorites
