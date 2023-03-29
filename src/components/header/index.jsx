import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { BiChevronLeft } from "react-icons/bi"
import { BsChat } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { signOut } from "../../store/actions"

const Header = () => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.auth.userId)
  const [showNavbar, setShowNavbar] = useState(true)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const logOut = () => {
    dispatch(signOut())
  }
  return (
    <div className="flex flex-col sticky top-0">
      <div className="flex justify-between p-6 bg-secondary">
        <BiChevronLeft
          size={45}
          color={"#C4C4D4"}
          onClick={handleShowNavbar}
          className={`ease-in-out duration-200 ${
            showNavbar ? "rotate-180" : null
          }`}
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <BsChat size={35} color={"#C4C4D4"} />
          <p className="text-xs font-bold text-primary">React Chat</p>
        </div>
      </div>
      <div
        className={`bg-secondary w-4/5 ease-in-out duration-200 h-full fixed z-10 ${
          showNavbar ? "-translate-x-full" : null
        }`}
      >
        <ul className="flex flex-col items-center my-6">
          <p
            onClick={handleShowNavbar}
            className="p-4 text-primary font-bold text-base"
          >
            X
          </p>
          <NavLink to={"/"} onClick={handleShowNavbar}>
            <li className="p-4 text-primary font-bold text-base">Home</li>
          </NavLink>
          {!userId ? (
            <NavLink to={"/signin"} onClick={handleShowNavbar}>
              <li className="p-4 text-primary font-bold text-base">Sign In</li>
            </NavLink>
          ) : (
            <NavLink
              to={"/"}
              onClick={() => {
                handleShowNavbar()
                logOut()
              }}
            >
              <li className="p-4 text-primary font-bold text-base">Sign Out</li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
