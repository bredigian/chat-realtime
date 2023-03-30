import Label from "../label"
import React from "react"

const Input = ({
  label,
  icon,
  subLabel,
  type,
  id,
  onSubmit,
  onChange,
  value,
  border,
}) => {
  return (
    <div className="w-full">
      <Label subLabel={subLabel} icon={icon}>
        <input
          className={`bg-transparent focus:outline-none ${
            border && " border-b border-transparent focus:border-primary"
          } w-full text-input placeholder-primary`}
          placeholder={`${label}`}
          id={id}
          type={type}
          onKeyDown={onSubmit}
          onChange={onChange}
          value={value}
        />
      </Label>
    </div>
  )
}

export default Input
