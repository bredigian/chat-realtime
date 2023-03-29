import { Chat, ChatList, Home, SignIn, SignUp } from "./views"
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom"

import { Header } from "./components"
import { ProtectedRoute } from "./routes"
import { Provider } from "react-redux"
import React from "react"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home title={"Welcome"} />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/chat"
            element={
              <ProtectedRoute>
                <ChatList />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/chat/:userId/:userFriend/:userFriendUsername"
            element={
              <ProtectedRoute>
                <Chat />
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
