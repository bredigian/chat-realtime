import { Form, Loading } from "../../../components"
import React, { useEffect, useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { formReducer } from "../../../store/reducers"
import { initialState } from "../../../store/reducers/form"
import { onInputChange } from "../../../utils"
import { signIn } from "../../../store/actions"
import { useNavigate } from "react-router"

const SignIn = () => {
  const [formState, dispatchFormState] = useReducer(formReducer, initialState)
  const [loading, setLoading] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const [isError, setIsError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state) => state.auth.userId)
  const error = useSelector((state) => state.auth.error)
  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState)
  }
  const login = async (e) => {
    e.preventDefault()
    setIsLogging(true)
    const user = {
      email: formState.email.value,
      password: formState.password.value,
    }
    dispatch(signIn(user.email, user.password))
  }
  useEffect(() => {
    if (userId) {
      navigate("/home")
    } else if (error) {
      setTimeout(() => {
        setIsError(error)
        setIsLogging(false)
      }, 1500)
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
        <Form
          type={"Sign In"}
          onSubmit={login}
          isLogging={isLogging}
          onHandleChangeInput={onHandleChangeInput}
          formState={formState}
          error={isError}
        />
      </div>
    )
  }
}

export default SignIn
