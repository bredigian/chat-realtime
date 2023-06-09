import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs"
import { Button, Card, Input } from "../../components"

import { Link } from "react-router-dom"
import { MdAlternateEmail } from "react-icons/md"
import { Pulsar } from "@uiball/loaders"
import React from "react"

const Form = ({
  type,
  onSubmit,
  isLogging,
  error,
  onHandleChangeInput,
  formState,
}) => {
  return (
    <Card className="w-4/5 max-w-form flex flex-col items-center gap-5">
      <h1 className="text-lg font-bold text-primary">{type}</h1>
      <form
        className="flex flex-col gap-5 items-center w-full"
        onSubmit={onSubmit}
      >
        <Input
          label={"Email"}
          type="email"
          id="email"
          border={true}
          icon={
            <MdAlternateEmail className="border-b border-transparent text-primary text-base" />
          }
          onChange={(e) => onHandleChangeInput(e.target.value, "email")}
          value={formState.email.value}
          hasError={formState.email.hasError}
          errorMessage={formState.email.errorMessage}
          clicked={formState.email.clicked}
          sublabelON={true}
        />
        {type !== "Sign In" ? (
          <Input
            label={"Username"}
            type="text"
            id="username"
            border={true}
            icon={
              <BsFillPersonFill className="border-b border-transparent text-primary text-base" />
            }
            onChange={(e) => onHandleChangeInput(e.target.value, "username")}
            value={formState.username.value}
            hasError={formState.username.hasError}
            errorMessage={formState.username.errorMessage}
            clicked={formState.username.clicked}
            sublabelON={true}
          />
        ) : null}
        <Input
          label={"Password"}
          type="password"
          id="password"
          border={true}
          icon={
            <BsFillKeyFill className="border-b border-transparent text-primary text-base" />
          }
          onChange={(e) => onHandleChangeInput(e.target.value, "password")}
          value={formState.password.value}
          hasError={formState.password.hasError}
          errorMessage={formState.password.errorMessage}
          clicked={formState.password.clicked}
          sublabelON={true}
        />
        {isLogging ? (
          <Pulsar />
        ) : (
          <Button
            title={type}
            type={"submit"}
            size={"text-sm"}
            color={"bg-primary"}
            colorText={"text-primary"}
            disable={
              type === "Sign In"
                ? formState.email.hasError || formState.password.hasError
                : formState.email.hasError ||
                  formState.password.hasError ||
                  formState.username.hasError
            }
          />
        )}
        {error ? <p className="text-xs italic text-error">{error}</p> : null}
      </form>
      <Link
        to={type === "Sign In" ? "/signup" : "/signin"}
        className="text-xs text-primary cursor-pointer underline"
      >
        {type === "Sign In"
          ? "No account yet? Sign Up"
          : "Already have an account? Sign In"}
      </Link>
    </Card>
  )
}

export default Form
