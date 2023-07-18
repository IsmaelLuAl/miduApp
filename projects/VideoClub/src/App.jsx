import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  // La función de debounce necesita un useCallback porque sino crearia una nueva función cada vez que se renderiza el componente
  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('inside debounce', search)
      getMovies({ search })
    }, 500), [])

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSort = () => {
    setSort(!sort) // !false = true
  }

  return (
    <>
      <div>
        <header>
          <h1>VideoClub</h1>
          <form className='form' onSubmit={handleSubmit}>
            <label className='input-search'>
              <input
                style={{
                  border: '1px solid transparent',
                  borderColor: error ? 'red' : 'transparent'
                }}
                onChange={handleChange} value={search} name='searchMovie' placeholder='Avengers, Kill Bill, Matrix ...'
              />
              <input type='checkbox' onChange={handleSort} checked={sort} />
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
