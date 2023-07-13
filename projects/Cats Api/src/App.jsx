import React, { useEffect, useState } from 'react'
import './App.css'

const CAT_PREFIX_IMG_URL = `https://cataas.com`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const App = () => {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  // Effect to fetch the random fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])
  
  // Effect to fetch the image with 3 first words depending on the fact
  useEffect(() => {   
    if(!fact) return

    const firs3tWord = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firs3tWord}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])
  

  return (
    <>
      <main>
        <h1>App</h1>
        <p>{fact}</p>
        {imgUrl && <img src={`${CAT_PREFIX_IMG_URL}${imgUrl}`} alt={`Image extracted using the first three words for ${fact}`}/>}
      </main>
    </>
  )
}
