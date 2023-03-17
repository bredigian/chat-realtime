import { Chat, Home, SignIn, SignUp } from "./views"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import AuthProvider from "./context/auth"
import { Header } from "./components"
import { ProtectedRoute } from "./routes"
import React from "react"

function App() {
  return (
    <Router>
      <AuthProvider>
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
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route exact path="*" element={<h1>404</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
