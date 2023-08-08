import { Sub, SubsResponseApi } from "../types"

const fetchSubs = (): Promise<SubsResponseApi> => {
  return fetch('http://localhost:3001/subs').then(response => response.json())
}

const mapFromApiToSub = (apiResponse: SubsResponseApi): Array<Sub> => {
  return apiResponse.map(subFromApi => {
    const { nick, months: subMonth, profileUrl: avatar, description } = subFromApi

    return { nick, subMonth, avatar, description}
  })
}

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSub)
}