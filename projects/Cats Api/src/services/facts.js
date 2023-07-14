const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getNewFact = async () => { 
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

export const getNewImg = async (imgUrl) => {
  const res = await fetch(imgUrl)
  const data = await res.json()
  const { url } = data
  return url
}