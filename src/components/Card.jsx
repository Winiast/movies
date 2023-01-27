import React from 'react'
import '../styles/Card.css'

const Card = ({ id, poster, title, release_date }) => {
  return (
    <div className="card-movie" key={id}>
      <img className="card-movie-image" src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} />
      <div className="card-movie-info">
        <h3 className="info-title">{title}</h3>
        <span className="info-data">{release_date}</span>
      </div>
    </div>
  )
}

export default Card
