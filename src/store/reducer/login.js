import { fromJS } from 'immutable'
import { login as types } from '../actionTypes'

const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case types.TOGGLE_LOGIN_STATUS:
      return state.set('isLogin', action.status)
    default:
      return state
  }
}
