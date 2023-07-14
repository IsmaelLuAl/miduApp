import { useEffect, useState } from "react"
import { getNewImg } from "../services/facts"
import { CAT_PREFIX_IMG_URL } from "../Consts"

export function useCatImg ({ fact }) {

  const [imgUrl, setImgUrl] = useState()
  
  // Effect to fetch the image with 3 first words depending on the fact
  useEffect(() => {   
    if(!fact) return

    const firs3tWords = fact.split(' ', 3).join(' ')
    const imgCatUrl = `${CAT_PREFIX_IMG_URL}/cat/says/${firs3tWords}?size=50&color=red&json=true`
    getNewImg(imgCatUrl).then(img => setImgUrl(img))

  }, [fact])

  return { imgUrl: `${CAT_PREFIX_IMG_URL}${imgUrl}` }
} // Returs the image url




