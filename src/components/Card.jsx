import React from 'react'
import '../styles/Card.css'

const Card = ({ id, poster, original_title, release_date }) => {
  if (!id) {
    return <p>Carregando ...</p>
  }
  return (
    <div className="card-movie" key={id}>
      <img className="card-movie-image" src={`https://image.tmdb.org/t/p/w200${poster}`} alt={original_title} />
      <div className="card-movie-info">
        <h3 className="info-title">{original_title}</h3>
        <span className="info-data">{release_date}</span>
      </div>
    </div>
  )
}

export default Card
