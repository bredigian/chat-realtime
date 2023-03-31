import Card from "../card"
import React from "react"

const UserItem = ({ data, onClick }) => {
  console.log(data)
  return (
    <Card
      className={"flex flex-row items-center justify-between w-full"}
      onClick={onClick}
    >
      <img
        src="./assets/images/default-avatar.png"
        alt="User Avatar"
        className="w-10 h-10 rounded-2xl"
      />
      <div className="userdata flex flex-col">
        <p className="text-primary text-base">{data.username}</p>
        <p className="text-primary italic text-xs">{data.email}</p>
      </div>
    </Card>
  )
}

export default UserItem
