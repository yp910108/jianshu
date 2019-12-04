import { fromJS } from 'immutable'
import { detail as types } from '../actionTypes'

const defaultState = fromJS({
  detail: {}
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case types.INIT_DETAIL:
      return state.set('detail', fromJS(action.data))
    default:
      return state
  }
}
