import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({picture, name, path, cardId}) => (
  <article className="card s-border">
    <div className="image-container s-ratio-16-9">
      <Link to={`/${path}/${cardId}`}>
        <img src={picture} alt={name} />
      </Link>
    </div>
    <div className="card__data s-pxy-2">
      <h3 className="t4 center">{name}</h3>
    </div>
  </article>
)

export default Card
