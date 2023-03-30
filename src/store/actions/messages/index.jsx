import { URL_BASE } from "../../../constants"
import { chatTypes } from "../../types"

const { GET_MESSAGES, POST_MESSAGE } = chatTypes

export const postMessages = (message, sender, receiver) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/messages.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message,
          sender: sender,
          receiver: receiver,
        }),
      })
      if (!response.ok) {
        throw new Error("Something went wrong when message was posted!")
      }
      const resData = await response.json()
      dispatch({
        type: POST_MESSAGE,
        message: {
          id: resData.name,
          message: message,
          sender: sender,
          receiver: receiver,
        },
      })
    } catch (error) {
      throw error
    }
  }
}

export const getMessages = (sender, receiver) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/messages.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error("Something went wrong when messages were fetched!")
      }
      const resData = await response.json()
      let messagesFiltered = []
      if (resData) {
        Object.keys(resData)?.forEach((key) => {
          if (
            (resData[key].sender === sender &&
              resData[key].receiver === receiver) ||
            (resData[key].sender === receiver &&
              resData[key].receiver === sender)
          ) {
            messagesFiltered.push({ id: key, ...resData[key] })
          }
        })
      }
      dispatch({
        type: GET_MESSAGES,
        messages: messagesFiltered,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
