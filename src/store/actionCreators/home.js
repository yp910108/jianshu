import axios from 'axios'
import { home as types } from '../actionTypes'

export const toggleVisibleBackTop = (bool) => ({
  type: types.TOGGLE_VISIBLE_BACK_TOP,
  bool
})

const initHomePage = (data) => ({
  type: types.INIT_HOME_PAGE,
  data
})

export const getHomePage = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/home_page.json')
      dispatch(initHomePage(data))
    } catch (e) {
      console.log(e)
    }
  }
}
export const articlePageChange = (pageNo) => ({ type: types.ARTICLE_PAGE_CHANGE, pageNo })

export const writerPageChange = (pageNo) => ({ type: types.WRITER_PAGE_CHANGE, pageNo })
