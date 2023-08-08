import { useEffect, useState } from "react"
import { getAllSubs } from "../services/getAllSubs"
import { Sub } from "../types"

export interface AppStates {
  subs: Array<Sub>
  newSubsNumber: number
}

export const useGetAllSubs = () => {
  const [subs, setSubs] = useState<AppStates["subs"]>([])
  
  useEffect(() => {
    getAllSubs().then(setSubs)
  }, [])

  return { subs, setSubs }

}