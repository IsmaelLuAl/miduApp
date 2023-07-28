import { useEffect, useState } from 'react'
import { EVENTS } from '../const/const'
import { match } from 'path-to-regexp'

export const Router = ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    const matcherURL = match(path, { decode: decodeURIComponent })
    const matched = matcherURL(currentPath)

    if (!matched) return false

    routeParams = matched.params // { query: 'example' } // /search/example
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
