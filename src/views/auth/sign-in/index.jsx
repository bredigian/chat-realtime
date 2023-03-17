import { Form } from "../../../components"
import React from "react"

const SignIn = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Sign In")
  }
  return (
    <div className="flex flex-col items-center my-8">
      <Form type={"Sign In"} onSubmit={onSubmit} />
    </div>
  )
}

export default SignIn
