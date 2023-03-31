import { Form, Loading } from "../../../components"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { signUp } from "../../../store/actions"
import { useNavigate } from "react-router"

const SignUp = () => {
  const [loading, setLoading] = useState(false)
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
  }
  setTimeout(() => {
    setLoading(true)
  }, 2000)
  if (!loading) {
    return <Loading />
  } else {
    return (
      <div className="grid place-items-center h-mid my-8">
        <Form type={"Sign Up"} onSubmit={signup} />
      </div>
    )
  }
}

export default SignUp
