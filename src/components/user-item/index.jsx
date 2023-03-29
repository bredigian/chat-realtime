import Card from "../card"
import React from "react"

const UserItem = ({ data, onClick }) => {
  return (
    <Card
      className={"flex flex-row items-center justify-between w-full"}
      onClick={onClick}
    >
      <img
        src="./assets/images/default-avatar.png"
        alt="User Avatar"
        className="w-12 h-12 rounded-2xl"
      />
      <p className="text-primary text-base">{data.username}</p>
    </Card>
  )
}

export default UserItem
