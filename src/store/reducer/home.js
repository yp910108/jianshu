import { fromJS } from 'immutable'
import { home as types } from '../actionTypes'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  writer: {
    list: [],
    pageNo: 1,
    totalPage: 1
  }
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case types.INIT_HOME_PAGE:
      const { topicList, articleList, writerList } = action.data
      return state.merge({
        topicList: fromJS(topicList),
        articleList: fromJS(articleList),
        writer: fromJS({
          list: writerList,
          pageNo: 1,
          totalPage: Math.ceil(writerList.length / 5)
        })
      })
    case types.WRITER_PAGE_CHANGE:
      const { pageNo } = action
      if (pageNo <= state.getIn(['writer', 'totalPage'])) {
        return state.setIn(['writer', 'pageNo'], pageNo)
      } else {
        return state.setIn(['writer', 'pageNo'], 1)
      }
    default:
      return state
  }
}
