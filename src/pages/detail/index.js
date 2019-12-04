import React, { Component } from 'react'
import { connect } from 'react-redux'
import { detail as actionCreator } from '../../store/actionCreators'
import { DetailWrapper } from './style'

// https://www.jianshu.com/p/605105b1408c
class Detail extends Component {
  render() {
    const { detailData } = this.props
    return (
      <DetailWrapper>
        <div className="container">
          <h2 className="title">{detailData.title}</h2>
          <div className="author-info">
            <img className="avatar" src={detailData.avatar} alt="" />
            <div className="info">
              <div className="author">
                {detailData.author}
                <span className="favorite">关注</span>
              </div>
              <div className="desc">
                <span className="diamond">
                  <i className="iconfont icondiamond" />
                  {detailData.diamond}
                </span>
                <span className="date">{detailData.date}</span>
                <span className="font-number">{detailData.fontNumber}</span>
                <span className="read-number">{detailData.readNumber}</span>
              </div>
            </div>
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: detailData.content }}></div>
        </div>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => {
  return {
    detailData: state.getIn(['detail', 'detail']).toJS()
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreator.getDetail(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)
