import { API_MOVIES_ENDPOINT } from '../const'

export const searchMovies = async ({ search }) => {
  const urlQuerySearch = `${API_MOVIES_ENDPOINT}s=${search}`

  if (search === '') return null

  try {
    const res = await fetch(urlQuerySearch)
    const data = await res.json()
    const movies = data.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error(error)
  }
}
