const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const minPasswordLenght = 6

export const validateInput = (type, value) => {
  let hasError = false
  let errorMessage = ""
  switch (type) {
    case "email":
      if (value.trim() === "") {
        hasError = true
        errorMessage = "Email is required"
      } else {
        if (!formatEmail.test(value)) {
          hasError = true
          errorMessage = "Email is not valid"
        } else {
          hasError = false
          errorMessage = ""
        }
      }
      break
    case "password":
      if (value.trim() === "") {
        hasError = true
        errorMessage = "Password is required"
      } else {
        if (value.length < minPasswordLenght) {
          hasError = true
          errorMessage = `Password must have at least ${minPasswordLenght} characters`
        } else {
          hasError = false
          errorMessage = ""
        }
      }
      break
    case "username":
      if (value.trim() === "") {
        hasError = true
        errorMessage = "Username is required"
      } else {
        hasError = false
        errorMessage = ""
      }
      break
    default:
      break
  }
  return { hasError, errorMessage }
}

export const UPDATE_FORM = "UPDATE_FORM"

export const onInputChange = (type, value, dispatch, formState) => {
  const { hasError, errorMessage } = validateInput(type, value)
  let isValid = true
  for (const key in formState) {
    const item = formState[key]
    if (key !== type && item.error) {
      isValid = false
      break
    }
  }
  dispatch({
    type: UPDATE_FORM,
    data: {
      type,
      value,
      hasError,
      errorMessage,
      clicked: true,
      isValid,
    },
  })
}
