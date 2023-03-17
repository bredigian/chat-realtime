import { AuthContext } from "../../context/auth"
import { Navigate } from "react-router-dom"
import React from "react"

const ProtectedRoute = ({ children }) => {
  const { userCurrent } = React.useContext(AuthContext)
  if (!userCurrent) {
    return <Navigate to="/signin" />
  }
  return children
}

export default ProtectedRoute
