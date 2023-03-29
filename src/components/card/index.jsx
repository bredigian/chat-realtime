import React from "react"

const Card = ({ children, className, onClick }) => {
  return (
    <div
      className={`${className} bg-secondary rounded-2xl p-4`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card
