import React from "react"

const Button = ({ title, type, disable, size, color, colorText }) => {
  return (
    <button
      disabled={disable}
      type={type}
      className={`rounded-2xl py-2 px-4 ${size} ${colorText} ${
        !disable ? color : "#000"
      } font-bold`}
    >
      {title}
    </button>
  )
}

export default Button
