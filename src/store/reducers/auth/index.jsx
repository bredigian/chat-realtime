const initialState = {
  token: null,
  userId: null,
  userData: null,
}

const authReducer = (state = initialState, action) => {
  return {
    ...state,
    token: action?.token,
    userId: action?.userId,
    userData: action?.userData,
  }
}

export default authReducer
