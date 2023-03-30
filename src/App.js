import { Chat, ChatList, Home, SignIn, SignUp } from "./views"
import React, { useState } from "react"
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom"

import { Header } from "./components"
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
        <Header show={showHeader} />
        <Routes>
          <Route exact path="/" element={<Home title={"Welcome"} />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/chat"
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
