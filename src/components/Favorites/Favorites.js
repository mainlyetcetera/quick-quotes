import React from 'react'
import PropTypes from 'prop-types'
import './Favorites.css'

const Favorites = ({favorites, removeQuote}) => {
  const toDisplay = favorites.map(favorite => {
    const {content, author, tags} = favorite
    return (
      <section className='favorite'>
        <article>Quote: {content}</article>
        <article>Author: {author}</article>
        <article>Categories: {tags}</article>
        <button
          className='remove-button'
          onClick={e => removeQuote(content)}
        >
        Remove from Favorites
        </button>
      </section>
    )
  })

  return <section>{toDisplay}</section>
}

export default Favorites

Favorites.propTypes = {
  favorites: PropTypes.array,
  removeQuote: PropTypes.func
}
