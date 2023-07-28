import { AboutPage } from '../pages/About'
import { HomePage } from '../pages/Home'

export const EVENTS = {
  PUSHSTATE: 'pushs tate',
  POPSTATE: 'popstate'
}

export const BUTTONS = {
  PRIMARY: 0
}

export const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: () => <h1>Search</h1>
  }
]
