import { authTypes } from "../../types"

const { SIGN_IN, SIGN_OUT, SIGN_UP } = authTypes

const initialState = {
  token: null,
  userId: null,
  userData: null,
  error: null,
}
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userData: action.userData,
        error: action.error,
      }
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        userData: action.userData,
        error: action.error,
      }
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        userId: null,
        userData: null,
        error: null,
      }
    default:
      return state
  }
}

export default authReducer
