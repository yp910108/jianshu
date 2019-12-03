import axios from 'axios'
import { home as types } from '../actionTypes'

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

export const writerPageChange = (pageNo) => ({ type: types.WRITER_PAGE_CHANGE, pageNo })
