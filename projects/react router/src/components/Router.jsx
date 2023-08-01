import { Children, useState } from 'react'
import { match } from 'path-to-regexp'
import { useRouter } from '../hooks/useRouter'

export const Router = ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useRouter(setCurrentPath)

  let routeParams = {}

  // add routes from children <Route /> component
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
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
