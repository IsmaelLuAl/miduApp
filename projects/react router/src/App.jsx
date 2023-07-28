import './App.css'
import { Router } from './components/Router'
import { routes } from './const/const'
import { Page404 } from './pages/404'

function App () {
  return (
    <>
      <main>
        <Router routes={routes} defaultComponent={Page404} />
      </main>
    </>
  )
}

export default App
