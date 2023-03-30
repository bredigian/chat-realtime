import { applyMiddleware, combineReducers, createStore } from "redux"
import { authReducer, chatReducer, usersReducer } from "./reducers"

import thunk from "redux-thunk"

const RootReducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
  chat: chatReducer,
})
export default createStore(RootReducers, applyMiddleware(thunk))
