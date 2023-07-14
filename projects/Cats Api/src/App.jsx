import './App.css'
import { useCatImg } from './hooks/usecatImg'
import { useCatfact } from './hooks/useCatFact'

export const App = () => {

  const { fact, refreshFact } = useCatfact()
  const { imgUrl } = useCatImg({ fact })
  
  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1>App</h1>
        <button onClick={handleClick}>Get New Fact</button>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt={`Image extracted using the first three words for ${fact}`}/>}
      </main>
    </>
  )
}
