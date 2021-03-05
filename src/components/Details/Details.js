import React from 'react'
import './Details.css'

const Details = ({info}) => {
  const {content, author, tags} = info
  return (
    <section>
      <article>{content}</article>
      <article>{author}</article>
      <article>{tags}</article>
    </section>
  )
}

export default Details

