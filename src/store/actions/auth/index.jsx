import {
  URL_AUTH_SIGN_IN,
  URL_AUTH_SIGN_UP,
  URL_BASE,
} from "../../../constants/firebase"

import { authTypes } from "../../types"

const { SIGN_IN, SIGN_UP, SIGN_OUT } = authTypes
export const signUp = (email, username, password) => {
  return async (dispatch) => {
    try {
      const signUp = await fetch(URL_AUTH_SIGN_UP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      })
      if (!signUp.ok) {
        throw new Error("User already exists")
      }
      const data = await signUp.json()
      const createUser = await fetch(`${URL_BASE}/users.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          data: {
            email: data.email,
            username: username,
          },
        }),
      })
      const responseCreateUser = await createUser.json()
      const userData = {
        id: responseCreateUser.name,
        data: {
          email: data.email,
          username: username,
        },
      }
      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
        userData: userData,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: SIGN_UP,
        error: error.message,
      })
    }
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const signIn = await fetch(URL_AUTH_SIGN_IN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      })
      if (!signIn.ok) {
        throw new Error("Email or password incorrect")
      }
      const data = await signIn.json()
      const getUser = await fetch(`${URL_BASE}/users.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!getUser.ok) {
        throw new Error("User not found")
      }
      const responseGetUser = await getUser.json()
      let userData = []
      Object.keys(responseGetUser).forEach((key) => {
        if (responseGetUser[key].data.email === data.email) {
          userData = {
            id: key,
            data: responseGetUser[key].data,
          }
          return userData
        }
      })
      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
        userData: userData ? userData : [],
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: SIGN_IN,
        error: error.message,
      })
    }
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
    token: null,
    userId: null,
    userData: null,
  }
}
