import { Suspense, lazy } from 'react'
import './App.css'
import { Router } from './components/Router'
// import { routes } from './const/const'
import { Page404 } from './pages/404'
// import { AboutPage } from './pages/About'
import { HomePage } from './pages/Home'
import { Route } from './pages/Route'
import { SearchPage } from './pages/SearchPage'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Router routes={routes} defaultComponent={Page404}>
            <Route path='/' Component={HomePage} />
            <Route path='/about' Component={LazyAboutPage} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
