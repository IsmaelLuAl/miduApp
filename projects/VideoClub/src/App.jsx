import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <>
      <div>
        <header>
          <h1>VideoClub</h1>
          <form className='form'>
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
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
