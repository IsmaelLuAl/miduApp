import { useEffect, useRef, useState } from 'react'

// Esta forma de controlar el formulario se denomina: NO CONTROLADA
// const handleSubmit = (event) => {
//   event.preventDefault()
//   // Esta forma de recuperar los elementos del DOM es puramente javascript
//   // En este caso se extrae el objeto de searchMovie de las entradas que recibe el formulario que estamos enviando, es decir, el input
//   const {searchMovie} = Object.fromEntries(
//     new window.FormData(event.target)
//   )
// }
export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState()
  const isFirstinput = useRef(true)

  useEffect(() => {
    if (isFirstinput.current) {
      isFirstinput.current = search === ''
      return
    }

    if (search === '') {
      setError('You must enter a movie title')
      return
    } else if (search.match(/^\d+$/)) {
      setError('Can not search a movie with a number')
      return
    } else if (search.length < 3) {
      setError('You must enter at least 3 characters')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }
}
