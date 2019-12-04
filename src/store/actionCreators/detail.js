import axios from 'axios'
import { detail as types } from '../actionTypes'

export const initDetail = (data) => ({
  type: types.INIT_DETAIL,
  data
})

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/article_detail.json?id=' + id)
      dispatch(initDetail(data))
    } catch (e) {
      console.log(e)
    }
  }
}
