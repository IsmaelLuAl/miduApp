import './App.css'
import { useEffect, useState } from 'react';
import List from './components/List';
import { Form } from './components/Form';
import { Sub } from './types';
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
  
  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <>
      <h1>Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </>
  )
}

export default App
