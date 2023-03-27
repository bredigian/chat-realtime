import React from "react"

const Card = ({ children, className }) => {
  return (
    <div className={`${className} bg-secondary rounded-2xl p-4`}>
      {children}
    </div>
  )
}

export default Card
