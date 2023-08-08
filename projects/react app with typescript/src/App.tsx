import './App.css'
import List from './components/List';
import { useRef } from 'react';
import { Form } from './components/Form';
import { Sub } from './types';
import { useGetAllSubs } from './hooks/useGetAllSubs';

function App() {
  const divRef = useRef<HTMLDivElement>(null)
  
  const { subs, setSubs } = useGetAllSubs()
  
  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className='App' ref={divRef}>
      <h1>Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
