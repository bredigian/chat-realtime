import React from "react"

const Header = ({ title, iconAction }) => {
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-secondary w-full">
      {iconAction}
      <p className="text-primary font-bold text-base">{title}</p>
    </div>
  )
}

export default Header
