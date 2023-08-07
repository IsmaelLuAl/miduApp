import React, { Dispatch, SetStateAction, useState } from "react"
import { Sub } from '../types';

interface FormState {
  inputValues: Sub
}

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

export function Form({ onNewSub }: FormProps) {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: ""
  })


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onNewSub(inputValues)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues(
      {
        ...inputValues, 
        [event.target.name]: event.target.value
      }
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick"/>
        <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonth" placeholder="subMonth"/>
        <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
        <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"/>
        <button type="submit">Save new Sub!</button>
      </form>
    </div>
  )
}