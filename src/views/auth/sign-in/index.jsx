import { useDispatch, useSelector } from "react-redux"

import { Form } from "../../../components"
import React from "react"
import { signIn } from "../../../store/actions"
import { useNavigate } from "react-router"

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state) => state.auth.userId)
  const login = (e) => {
    e.preventDefault()
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    console.log("signIn")
    dispatch(signIn(user.email, user.password))
    if (userId !== null) {
      setTimeout(() => {
        navigate("/")
      }, 2000)
    }
  }
  return (
    <div className="flex flex-col items-center my-8">
      <Form type={"Sign In"} onSubmit={login} />
    </div>
  )
}

export default SignIn
