import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  return (
    <>
      <div>
        <header>
          <h1>VideoClub</h1>
          <form className='form' onSubmit={handleSubmit}>
            <label className='input-search'>
              Search your movie
              <input
                style={{
                  border: '1px solid transparent',
                  borderColor: error ? 'red' : 'transparent'
                }}
                onChange={handleChange} value={search} name='searchMovie' placeholder='Avangers, Kill Bill, Matrix ...'
              />
              <button type='submit'>Search..</button>
            </label>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          {
            loading
              ? <p>Loading...</p>
              : <Movies movies={movies} />
          }
        </main>
      </div>
    </>
  )
}

export default App
