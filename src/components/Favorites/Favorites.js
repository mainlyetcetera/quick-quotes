import React from 'react'
import PropTypes from 'prop-types'

const Favorites = ({favorites, removeQuote}) => {
  const toDisplay = favorites.map(favorite => {
    const {content, author, tags} = favorite
    return (
      <section>
        <article>Quote: {content}</article>
        <article>Author: {author}</article>
        <article>Categories: {tags}</article>
        <button
          onClick={e => removeQuote(content)}
        ></button>
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
