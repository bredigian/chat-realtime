import { Form, Loading } from "../../../components"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { signIn } from "../../../store/actions"
import { useNavigate } from "react-router"

const SignIn = () => {
  const [loading, setLoading] = useState(false)
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
    dispatch(signIn(user.email, user.password, navigate))
  }

  setTimeout(() => {
    setLoading(true)
  }, 2000)
  if (!loading) {
    return <Loading />
  } else {
    return (
      <div className="grid place-items-center h-mid my-8">
        <Form type={"Sign In"} onSubmit={login} />
      </div>
    )
  }
}

export default SignIn
