import { BsChat } from "react-icons/bs"
import { Link } from "react-router-dom"
import React from "react"

const Home = ({ title }) => {
  return (
    <div className="flex flex-col m-4 items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-lg text-primary font-bold">{title} to</h1>
        <BsChat size={100} className="text-primary" />
        <h1 className="text-xl text-primary font-bold">React Chat</h1>
      </div>
      <Link
        to={"/chat"}
        className="bg-secondary p-4 text-lg text-primary font-bold rounded-2xl"
      >
        Let's start!
      </Link>
    </div>
  )
}

export default Home
