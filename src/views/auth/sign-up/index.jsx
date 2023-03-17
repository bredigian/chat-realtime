import { Form } from "../../../components"
import React from "react"

const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Sign Up")
  }
  return (
    <div className="flex flex-col items-center my-8">
      <Form type={"Sign Up"} onSubmit={onSubmit} />
    </div>
  )
}

export default SignUp
