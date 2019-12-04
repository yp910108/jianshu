import { fromJS } from 'immutable'
import { home as types } from '../actionTypes'

const defaultState = fromJS({
  visibleBackTop: false,
  topicList: [],
  article: {
    list: [],
    total: 0,
    pageNo: 1,
    pageSize: 5
  },
  writer: {
    list: [],
    pageNo: 1,
    totalPage: 1
  }
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case types.TOGGLE_VISIBLE_BACK_TOP:
      return state.set('visibleBackTop', action.bool)
    case types.INIT_HOME_PAGE:
      const { topicList, articleList, writerList } = action.data
      return state.merge({
        topicList: fromJS(topicList),
        article: fromJS({
          list: articleList,
          total: articleList.length,
          pageNo: 1,
          pageSize: 5
        }),
        writer: fromJS({
          list: writerList,
          pageNo: 1,
          totalPage: Math.ceil(writerList.length / 5)
        })
      })
    case types.ARTICLE_PAGE_CHANGE:
      const total = state.getIn(['article', 'total'])
      const pageSize = state.getIn(['article', 'pageSize'])
      const totalPage = Math.ceil(total / pageSize)
      if (action.pageNo > totalPage) {
        return state.setIn(['article', 'pageNo'], action.pageNo--)
      } else {
        return state.setIn(['article', 'pageNo'], action.pageNo)
      }
    case types.WRITER_PAGE_CHANGE:
      if (action.pageNo <= state.getIn(['writer', 'totalPage'])) {
        return state.setIn(['writer', 'pageNo'], action.pageNo)
      } else {
        return state.setIn(['writer', 'pageNo'], 1)
      }
    default:
      return state
  }
}
