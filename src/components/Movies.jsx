import React, { useEffect, useState } from 'react'
import '../styles/Movies.css'

import { API_URL } from '../config'
import Card from './Card'

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    const requestTrendingMovies = async () => {
      const response = await fetch(`${API_URL}/trending/movie/day?api_key=${import.meta.env.VITE_MOVIES_DB_KEY}`)
      const { results } = await response.json()

      setTrendingMovies(results)
    }

    requestTrendingMovies()
  }, [])

  return (
    <div className="movie">
      {trendingMovies.map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          original_title={movie.original_title}
          release_date={movie.release_date}
        />
      ))}
    </div>
  )
}

export default Movies
