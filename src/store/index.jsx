import { applyMiddleware, combineReducers, createStore } from "redux"

import { authReducer } from "./reducers"
import thunk from "redux-thunk"

const RootReducers = combineReducers({
  auth: authReducer,
})
export default createStore(RootReducers, applyMiddleware(thunk))
