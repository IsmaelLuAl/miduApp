import React, { useEffect } from 'react'

export const SearchPage = ({ routeParams }) => {
  useEffect(() => {
    document.title = `You are searching ${routeParams.query}`
  }, [])

  return (
    <>
      <h1>Has buscado {routeParams.query}</h1>
    </>
  )
}
