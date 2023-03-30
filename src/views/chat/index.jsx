import { HeaderChat, Input, MessageItem } from "../../components"
import React, { useEffect, useState } from "react"
import { getDatabase, ref } from "firebase/database"
import { getMessages, postMessages } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router"

const Chat = ({ handleShowHeader }) => {
  const { userFriendUsername } = useParams()
  const [message, setMessage] = useState("")
  const database = getDatabase()
  const databaseRef = ref(database, "messages")
  const userCurrent = useSelector((state) => state.auth.userData.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMessages(userCurrent.username, userFriendUsername))
  }, [databaseRef])
  const messages = useSelector((state) => state.chat.messages)
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      setMessage("")
      dispatch(postMessages(message, userCurrent.username, userFriendUsername))
    }
  }
  const onChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <div className="flex flex-col items-center gap-4 m-4 ease-in-out duration-300">
      <HeaderChat
        username={userFriendUsername}
        handleShowHeader={handleShowHeader}
      />
      <div className="messages-list grid gap-4 w-full">
        {messages.map((message) => {
          return <MessageItem data={message} key={message.id} />
        })}
      </div>
      <div className="w-3/4 fixed bottom-4 bg-secondary rounded-3xl py-1 px-2 z-0">
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
