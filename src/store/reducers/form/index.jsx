import { UPDATE_FORM } from "../../../utils"

export const initialState = {
  email: { value: "", errorMessage: "", clicked: false, hasError: true },
  password: { value: "", errorMessage: "", clicked: false, hasError: true },
  username: { value: "", errorMessage: "", clicked: false, hasError: false },
  isFormatValid: false,
}

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { type, value, hasError, errorMessage, clicked, isValid } =
        action.data
      return {
        ...state,
        [type]: {
          ...state[type],
          value,
          hasError,
          errorMessage,
          clicked,
        },
        isValid,
      }
    default:
      return state
  }
}

export default formReducer
