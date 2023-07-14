import { useEffect, useState } from "react"
import { getNewFact } from "../services/facts"

export function useCatfact() {
  const [fact, setFact] = useState()
  
  const refreshFact = () => {
    getNewFact().then(newFact => setFact(newFact))
  }
  // Effect to fetch the random fact
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}