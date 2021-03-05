import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'

const Details = ({info}) => {
  const {content, author, tags} = info
  return (
    <section>
      <article>{content}</article>
      <article>{author}</article>
      <article>{tags}</article>
      <Link to='/'>Return</Link>
    </section>
  )
}

export default Details

