import React from "react"

const Label = ({ icon, subLabel, children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-3">
        {icon}
        {children}
      </div>
      {subLabel ? <p className="text-xs">subLabel</p> : null}
    </div>
  )
}

export default Label
