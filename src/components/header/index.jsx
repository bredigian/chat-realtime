import React from "react"

const Header = ({ title, iconAction }) => {
  return (
    <div
      className="flex items-center justify-between p-4 sticky top-0 bg-secondary w-full
    dk:w-3/4 dk:mt-4 dk:mx-auto dk:rounded-lg dk:top-4
    "
    >
      {iconAction}
      <p className="text-primary font-bold text-base dk:text-lg">{title}</p>
    </div>
  )
}

export default Header
