import { BsFillKeyFill, BsFillPersonFill } from "react-icons/bs"
import { Card, Input } from "../../components"

import { Link } from "react-router-dom"
import { MdAlternateEmail } from "react-icons/md"
import React from "react"

const Form = ({ type, onSubmit }) => {
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
          icon={
            <MdAlternateEmail className="border-b border-transparent text-primary text-base" />
          }
        />
        {type !== "Sign In" ? (
          <Input
            label={"Username"}
            type="text"
            id="username"
            icon={
              <BsFillPersonFill className="border-b border-transparent text-primary text-base" />
            }
          />
        ) : null}
        <Input
          label={"Password"}
          type="password"
          id="password"
          icon={
            <BsFillKeyFill className="border-b border-transparent text-primary text-base" />
          }
        />
        <button
          type="submit"
          className="rounded-2xl py-2 px-4 text-primary bg-primary font-bold"
        >
          {type}
        </button>
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
