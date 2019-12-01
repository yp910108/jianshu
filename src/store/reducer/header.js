import { fromJS } from 'immutable'
import { header as types } from '../actionTypes'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  hotList: [],
  pageNo: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case types.SEARCH_FOCUS:
      return state.set('focused', true)
    case types.SEARCH_BLUR:
      return state.set('focused', false)

    case types.INIT_HOT_LIST:
      return state.merge({
        hotList: action.data,
        totalPage: action.totalPage
      })
    case types.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case types.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case types.PAGE_CHANGE:
      const { pageNo } = action
      if (pageNo <= state.get('totalPage')) {
        return state.set('pageNo', pageNo)
      } else {
        return state.set('pageNo', 1)
      }
    default:
      return state
  }
}
