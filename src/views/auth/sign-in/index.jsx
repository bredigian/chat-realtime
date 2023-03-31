import { Form, Loading } from "../../../components"
import React, { useEffect, useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { formReducer } from "../../../store/reducers"
import { initialState } from "../../../store/reducers/form"
import { signIn } from "../../../store/actions"
import { useNavigate } from "react-router"

const SignIn = () => {
  const [formState] = useReducer(formReducer, initialState)
  const [loading, setLoading] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state) => state.auth.userId)
  const login = (e) => {
    e.preventDefault()
    setIsLogging(true)
    const user = {
      email: formState.email.value,
      password: formState.password.value,
    }
    dispatch(signIn(user.email, user.password))
    setTimeout(() => {
      setIsLogging(false)
    }, 1500)
  }
  useEffect(() => {
    if (userId) {
      navigate("/home")
    }
  }, [dispatch, userId])
  setTimeout(() => {
    setLoading(true)
  }, 2000)
  if (!loading) {
    return <Loading />
  } else {
    return (
      <div className="grid place-items-center h-mid my-8">
        <Form type={"Sign In"} onSubmit={login} isLogging={isLogging} />
      </div>
    )
  }
}

export default SignIn
