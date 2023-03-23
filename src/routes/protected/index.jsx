import { Navigate } from "react-router-dom"
import React from "react"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ children }) => {
  const userId = useSelector((state) => state.auth.userId)
  if (!userId) {
    return <Navigate to="/signin" />
  }
  return children
}

export default ProtectedRoute
