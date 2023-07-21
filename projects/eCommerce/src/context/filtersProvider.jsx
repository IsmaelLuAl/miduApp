import { createContext, useState } from 'react'

// Este es el que tenemos que consumir
export const FiltersContext = createContext()

// Este es el que nos provee acceso al contexto
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState(
    {
      category: 'all',
      minPrice: 0
    }
  )
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
