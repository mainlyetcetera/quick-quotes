import React from 'react'

const Error = ({status, text}) => (
  <section>
    <article>Sorry!</article>
    <article>Something went wrong!</article>
    <article>{status}</article>
    <article>{text}</article>
  </section>
)

export default Error
