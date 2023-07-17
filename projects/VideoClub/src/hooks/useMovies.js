import { useState } from 'react'
import responseMovies from '../mocks/resultsApiWithSearch.json'
import { API_MOVIES_ENDPOINT } from '../const'
import withoutResults from '../mocks/noResults.json'

export function useMovies ({ search }) {
  const [responseMoviesApi, setResponseMoviesApi] = useState([])

  const movies = responseMovies.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const urlQuerySearch = `${API_MOVIES_ENDPOINT}s=${search}`

  const getMovies = async () => {
    if (search) {
      setResponseMoviesApi(responseMovies)
    } else {
      setResponseMoviesApi(withoutResults)
    }
    // const res = await fetch(urlQuerySearch)
    // const data = await res.json()
    // console.log(data)
  }

  return { movies: mappedMovies, getMovies }
}
