import { Sub } from '../types';
import useNewSubForm from "../hooks/useNewSubForm";
interface FormProps {
  onNewSub: (newSub: Sub) => void
}

export function Form({ onNewSub }: FormProps) {
  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onNewSub(inputValues)
    dispatch({ type: "clear_form" })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  const handleClear = () => {
    dispatch({ type: "clear_form" })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick"/>
        <input onChange={handleChange} value={inputValues.subMonth} type="number" name="subMonth" placeholder="subMonth"/>
        <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
        <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description"/>
        <button onClick={handleClear} type="button">Clear form</button>
        <button type="submit">Save new Sub!</button>
      </form>
    </div>
  )
}