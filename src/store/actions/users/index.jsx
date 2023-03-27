import { URL_BASE } from "../../../constants"
import { userTypes } from "../../types"

const { GET_USERS } = userTypes

export const getUsers = (email) => {
  return async (dispatch) => {
    const getUsers = await fetch(`${URL_BASE}/users.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const dataUsers = await getUsers.json()
    let users = []
    Object.keys(dataUsers).forEach((key) => {
      if (dataUsers[key].data.email !== email)
        users.push({
          id: key,
          ...dataUsers[key],
        })
    })
    dispatch({
      type: GET_USERS,
      users: users,
    })
  }
}
