import { Header, Loading, UserItem } from "../../components"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { MdOutlineExitToApp } from "react-icons/md"
import { getUsers } from "../../store/actions"
import { signOut } from "../../store/actions"
import { useNavigate } from "react-router"

const ChatList = ({ handleShowHeader }) => {
  const [loading, setLoading] = useState(false)
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
  const logOut = () => {
    dispatch(signOut())
  }
  setTimeout(() => {
    setLoading(true)
  }, 2000)
  if (!loading) {
    return <Loading />
  } else {
    return (
      <div className="flex flex-col w-full">
        <Header
          iconAction={
            <MdOutlineExitToApp size={30} color={"#C4C4D4"} onClick={logOut} />
          }
          title="Chats"
        />
        <div className="flex flex-col items-center gap-4 m-4">
          <div className="flex flex-col items-center gap-4 w-full">
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
      </div>
    )
  }
}

export default ChatList
