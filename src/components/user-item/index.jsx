import Card from "../card"
import React from "react"

const UserItem = ({ data, onClick }) => {
  return (
    <Card
      className={
        "flex flex-row items-center justify-between w-full hover:cursor-pointer"
      }
      onClick={onClick}
    >
      <img
        src="./assets/images/default-avatar.png"
        alt="User Avatar"
        className="w-10 h-10 rounded-2xl"
      />
      <div className="userdata flex flex-col items-end">
        <p className="text-primary text-base">{data.username}</p>
        <p className="text-primary italic text-xs">{data.email}</p>
      </div>
    </Card>
  )
}

export default UserItem
