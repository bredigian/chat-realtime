import { Pulsar } from "@uiball/loaders"
import React from "react"

const Loading = () => {
  return (
    <div className="grid place-items-center h-loader">
      <Pulsar size={40} color={"#C4C4D4"} />
    </div>
  )
}

export default Loading
