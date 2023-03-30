import { chatTypes } from "../../types"

const { GET_MESSAGES, POST_MESSAGE } = chatTypes

const initialState = {
  messages: [],
  loading: true,
  error: null,
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
        loading: false,
        error: null,
      }
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
        loading: false,
        error: null,
      }
    default:
      return state
  }
}

export default chatReducer
