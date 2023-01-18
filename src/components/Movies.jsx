import React, { useEffect, useState } from 'react'

import { API_URL } from '../config'

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
    <div>
      {trendingMovies.map((movie) => (
        <span key={movie.id}>{movie.original_title}</span>
      ))}
    </div>
  )
}

export default Movies
