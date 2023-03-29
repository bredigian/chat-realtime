import { Input, MessageItem } from "../../components"

import React from "react"
import { useParams } from "react-router"

const Chat = () => {
  const { userFriendUsername } = useParams()
  const [message, setMessage] = React.useState("")
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      console.log(message)
      setMessage("")
    }
  }
  const onChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <div className="flex flex-col items-center gap-4 m-4">
      <h1 className="text-primary text-base">{userFriendUsername}</h1>
      <div className="messages-list grid gap-4 w-full">
        {/* {messages.map((message) => {
          return <MessageItem data={message} />
        })} */}
      </div>
      <div className="w-3/4 sticky bottom-4 bg-secondary rounded-3xl py-1 px-2">
        <Input
          type={"text"}
          label="Type a message"
          onSubmit={onSubmit}
          onChange={onChange}
          value={message}
        />
      </div>
    </div>
  )
}

export default Chat
