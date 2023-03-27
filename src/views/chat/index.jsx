import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { UserItem } from "../../components"
import { getUsers } from "../../store/actions"

const Chat = () => {
  const users = useSelector((state) => state.users.users)
  const userData = useSelector((state) => state.auth.userData?.data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers(userData.email))
  }, [dispatch])
  return (
    <div className="flex flex-col items-center gap-4 m-4">
      <h1 className="text-primary text-lg font-bold">Users List</h1>
      <div className="flex flex-col items-center gap-4 w-4/5">
        {users.map((user) => {
          return <UserItem data={user.data} key={user.id} />
        })}
      </div>
    </div>
  )
}

export default Chat
