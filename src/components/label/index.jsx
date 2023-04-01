import React from "react"

const Label = ({
  icon,
  hasError,
  errorMessage,
  clicked,
  sublabelON,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-3">
        {icon}
        {children}
      </div>
      {sublabelON && (
        <div className="sublabel h-sublabel">
          {hasError && clicked ? (
            <p className="text-error text-xs italic">{errorMessage}</p>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default Label
