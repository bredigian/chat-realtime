import { userTypes } from "../../types"

const initialState = {
  users: [],
}
const { GET_USERS } = userTypes
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      }
    default:
      return state
  }
}

export default usersReducer
