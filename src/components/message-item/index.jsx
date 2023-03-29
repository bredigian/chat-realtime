import React from "react"

const MessageItem = ({ data }) => {
  return (
    <div
      className={`flex w-fit bg-secondary py-1 px-2 rounded-3xl ${
        data.sender !== "user" ? "justify-self-start" : "justify-self-end"
      }`}
    >
      <p className="text-primary">{data.message}</p>
    </div>
  )
}

export default MessageItem
