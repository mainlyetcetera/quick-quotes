import React from 'react'
import PropTypes from 'prop-types'

const Error = ({status, text}) => (
  <section>
    <article>Sorry!</article>
    <article>Something went wrong!</article>
    <article>{status}</article>
    <article>{text}</article>
  </section>
)

export default Error

Error.propTypes = { 
  status: PropTypes.number,
  text: PropTypes.string
}
