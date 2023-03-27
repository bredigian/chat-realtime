import { applyMiddleware, combineReducers, createStore } from "redux"
import { authReducer, usersReducer } from "./reducers"

import thunk from "redux-thunk"

const RootReducers = combineReducers({
  auth: authReducer,
  users: usersReducer,
})
export default createStore(RootReducers, applyMiddleware(thunk))
