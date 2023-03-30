import { BiChevronLeft } from "react-icons/bi"
import React from "react"
import { useNavigate } from "react-router"

const HeaderChat = ({ username, handleShowHeader }) => {
  const navigate = useNavigate()
  const backTo = () => {
    navigate(-1)
    handleShowHeader()
  }
  return (
    <div className="flex items-center justify-between w-full">
      <BiChevronLeft size={45} color={"#C4C4D4"} onClick={backTo} />
      <p className="text-primary text-base">{username}</p>
    </div>
  )
}

export default HeaderChat
