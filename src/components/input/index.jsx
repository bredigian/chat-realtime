import Label from "../label"
import React from "react"

const Input = ({ label, icon, subLabel, type, id }) => {
  return (
    <div className="w-full">
      <Label subLabel={subLabel} icon={icon}>
        <input
          className="bg-transparent border-b border-transparent focus:outline-none focus:border-primary w-full text-input placeholder-primary"
          placeholder={`${label}`}
          id={id}
          type={type}
        />
      </Label>
    </div>
  )
}

export default Input
