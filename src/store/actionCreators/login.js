import axios from 'axios'
import { login as types } from '../actionTypes'

export const toggleLoginStatus = (status) => ({
  type: types.TOGGLE_LOGIN_STATUS,
  status
})

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      await axios.get(`/api/login.json?username=${username}&password=${password}`)
      dispatch(toggleLoginStatus(true))
    } catch (e) {
      console.log(e)
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    dispatch(toggleLoginStatus(false))
  }
}
