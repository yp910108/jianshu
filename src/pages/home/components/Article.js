import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ArticleWrapper,
  ArticleItem,
  ArticleTitle,
  ArticleDesc,
  ArticleImg,
  ArticleIconWrapper,
  ArticleDiamond,
  ArticleAuthor,
  ArticleComment
} from '../style'

class List extends Component {
  render() {
    const { articleList } = this.props
    return (
      <ArticleWrapper>
        {articleList.map((article) => {
          return (
            <ArticleItem key={article.id}>
              <ArticleImg src={article.img} />
              <ArticleTitle>{article.title}</ArticleTitle>
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
            </ArticleItem>
          )
        })}
      </ArticleWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']).toJS()
  }
}

export default connect(mapState, null)(List)
