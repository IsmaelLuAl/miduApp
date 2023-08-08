import { useReducer } from "react"
import { INITIAL_STATE } from "../const"
import { Sub } from "../types"

interface FormState {
  inputValues: Sub
}

type FormReducerAction = {
  type: "change_value",
  payload: {
    inputName: string,
    inputValue: string | number
  }
} | {
  type: "clear_form"
}

const formReducer = ( state: FormState["inputValues"], action: FormReducerAction ) => {
  switch (action.type) {
    case "change_value": 
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    
    case "clear_form":
      return INITIAL_STATE
  }
}

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm