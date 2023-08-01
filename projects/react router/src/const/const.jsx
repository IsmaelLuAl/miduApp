import { SearchPage } from '../pages/SearchPage'

export const EVENTS = {
  PUSHSTATE: 'pushs tate',
  POPSTATE: 'popstate'
}

export const BUTTONS = {
  PRIMARY: 0
}

export const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]
