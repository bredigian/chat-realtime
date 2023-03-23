import { useDispatch, useSelector } from "react-redux"

import { Form } from "../../../components"
import React from "react"
import { signUp } from "../../../store/actions"
import { useNavigate } from "react-router"

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state) => state.auth.userId)
  const signup = async (e) => {
    e.preventDefault()
    const user = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    }
    console.log("signUp")
    dispatch(signUp(user.email, user.username, user.password))
    if (userId !== null) {
      setTimeout(() => {
        navigate("/")
      }, 2000)
    }
  }
  return (
    <div className="flex flex-col items-center my-8">
      <Form type={"Sign Up"} onSubmit={signup} />
    </div>
  )
}

export default SignUp
