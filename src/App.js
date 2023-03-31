import { Chat, ChatList, SignIn, SignUp } from "./views"
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom"
import React, { useState } from "react"

import { ProtectedRoute } from "./routes"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  const [showHeader, setShowHeader] = useState(true)
  const handleShowHeader = () => {
    setShowHeader(!showHeader)
  }
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to={"/signin"} />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <ChatList handleShowHeader={handleShowHeader} />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/chat/:userId/:userFriend/:userFriendUsername"
            element={
              <ProtectedRoute>
                <Chat handleShowHeader={handleShowHeader} />
              </ProtectedRoute>
            }
          />
          <Route exact path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
