import Label from "../label"
import React from "react"

const Input = ({
  label,
  value,
  hasError,
  errorMessage,
  clicked,
  icon,
  type,
  id,
  onSubmit,
  onChange,
  border,
  sublabelON,
}) => {
  return (
    <div className="w-full">
      <Label
        icon={icon}
        hasError={hasError}
        errorMessage={errorMessage}
        clicked={clicked}
        sublabelON={sublabelON}
      >
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
