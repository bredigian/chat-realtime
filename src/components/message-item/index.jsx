import React from "react"
import { useSelector } from "react-redux"

const MessageItem = ({ data }) => {
  const userCurrent = useSelector((state) => state.auth.userData.data)
  return (
    <div
      className={`flex w-fit bg-secondary py-1 px-2 rounded-lg max-w-message dk:max-w-message-dk ${
        data.sender === userCurrent.username
          ? "justify-self-end"
          : "justify-self-start"
      }`}
    >
      <p className="text-primary">{data.message}</p>
    </div>
  )
}

export default MessageItem
