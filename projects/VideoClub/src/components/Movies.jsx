import responseMovies from '../mocks/resultsApiWithSearch.json'

function ListOfMovies ({ movies }) {
  return (
    <>
      <ul className='movies'>
        {
          movies.map(movie => {
            return (
              <li className='movie' key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
              </li>

            )
          })
        }
      </ul>
    </>
  )
}

function NoMovies () {
  return (
    <p>No results fro this title</p>
  )
}

export function Movies ({ movies }) {
  const results = responseMovies.Response
  const hasMovies = movies && results === 'True'

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies />
  )
}
