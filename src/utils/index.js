const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const minPasswordLenght = 6

export const validateInput = (type, value) => {
  let error = false
  let errorMessage = ""
  switch (type) {
    case "email":
      if (value.trim() === "") {
        error = true
        errorMessage = "Email is required"
      } else {
        if (!formatEmail.test(value)) {
          error = true
          errorMessage = "Email is not valid"
        } else {
          error = false
          errorMessage = ""
        }
      }
      break
    case "password":
      if (value.trim() === "") {
        error = true
        errorMessage = "Password is required"
      } else {
        if (value.length < minPasswordLenght) {
          error = true
          errorMessage = `Password must have at least ${minPasswordLenght} characters`
        } else {
          error = false
          errorMessage = ""
        }
      }
      break
    case "username":
      if (value.trim() === "") {
        error = true
        errorMessage = "Username is required"
      } else {
        error = false
        errorMessage = ""
      }
      break
    default:
      break
  }
  return { error, errorMessage }
}

export const UPDATE_FORM = "UPDATE_FORM"

export const onInputChange = (type, value, dispatch, formState) => {
  const { error, errorMessage } = validateInput(type, value)
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
      error,
      errorMessage,
      clicked: true,
      isValid,
    },
  })
}
