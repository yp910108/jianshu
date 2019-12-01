import axios from 'axios'
import { fromJS } from 'immutable'
import { header as types } from '../actionTypes'

export const searchFocus = () => ({ type: types.SEARCH_FOCUS })

export const searchBlur = () => ({ type: types.SEARCH_BLUR })

const initHotList = (data) => ({
  type: types.INIT_HOT_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const getHotList = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/hot_search.json')
      dispatch(initHotList(data))
    } catch (e) {
      console.log(e)
    }
  }
}

export const mouseEnter = () => ({ type: types.MOUSE_ENTER })

export const mouseLeave = () => ({ type: types.MOUSE_LEAVE })

export const pageChange = (pageNo) => ({ type: types.PAGE_CHANGE, pageNo })
