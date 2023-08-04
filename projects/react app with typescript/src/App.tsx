import './App.css'
import { useEffect, useState } from 'react';
import List from './components/List';

interface Sub {
  nick: string,
  avatar: string,
  subMonths: number,
  description?: string
}

interface AppStates {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc//?u=dapelu',
    description: 'Dapelu is moderator sometimes'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 10,
    avatar: 'https://i.pravatar.cc//?u=sergio_serrano',
  }
]

function App() {
  const [subs, setSubs] = useState<AppStates["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppStates["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <>
      <h1>Subs</h1>
      <List subs={subs}/>
    </>
  )
}

export default App
