import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { UserItem } from "../../components"
import { getUsers } from "../../store/actions"
import { useNavigate } from "react-router"

const ChatList = ({ handleShowHeader }) => {
  const users = useSelector((state) => state.users.users)
  const userData = useSelector((state) => state.auth.userData?.data)
  const userId = useSelector((state) => state.auth.userId)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getUsers(userData.email))
  }, [dispatch])
  const openChat = (userFriend) => {
    handleShowHeader()
    navigate(`/chat/${userId}/${userFriend.id}/${userFriend.data.username}`)
  }
  return (
    <div className="flex flex-col items-center gap-4 m-4">
      <h1 className="text-primary text-lg font-bold">Users List</h1>
      <div className="flex flex-col items-center gap-4 w-4/5">
        {users.map((user) => {
          return (
            <UserItem
              data={user.data}
              key={user.id}
              onClick={() => openChat(user)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ChatList
