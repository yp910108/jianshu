import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { home as actionCreator } from '../../../store/actionCreators'
import {
  ArticleWrapper,
  ArticleList,
  ArticleItem,
  ArticleInfo,
  ArticleTitle,
  ArticleDesc,
  ArticleImg,
  ArticleIconWrapper,
  ArticleDiamond,
  ArticleAuthor,
  ArticleComment,
  LoadMore
} from '../style'

class List extends Component {
  render() {
    const { article, loadMore } = this.props
    let { list, total, pageNo, pageSize } = article
    const newList = list.slice(0, pageNo * pageSize)
    return (
      <ArticleWrapper>
        <ArticleList>
          {newList.map((article) => {
            return (
              <ArticleItem key={article.id}>
                <ArticleImg src={article.img} />
                <ArticleInfo>
                  <Link to={`/detail/${article.id}`}>
                    <ArticleTitle>{article.title}</ArticleTitle>
                  </Link>
                  <ArticleDesc>{article.desc}</ArticleDesc>
                  <ArticleIconWrapper>
                    <ArticleDiamond>
                      <i className="iconfont icondiamond" />
                      {article.diamond}
                    </ArticleDiamond>
                    <ArticleAuthor>{article.author}</ArticleAuthor>
                    <ArticleComment>
                      <i className="iconfont iconcomment" />
                      {article.comment}
                    </ArticleComment>
                    <i className="iconfont iconfavorite" />
                    {article.favorite}
                  </ArticleIconWrapper>
                </ArticleInfo>
              </ArticleItem>
            )
          })}
        </ArticleList>
        <LoadMore className={newList.length === total ? 'hide' : ''} onClick={() => loadMore(++pageNo)}>
          阅读更多
        </LoadMore>
      </ArticleWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    article: state.getIn(['home', 'article']).toJS()
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadMore(pageNo) {
      dispatch(actionCreator.articlePageChange(pageNo))
    }
  }
}

export default connect(mapState, mapDispatch)(List)
