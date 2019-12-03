import React, { Component } from 'react'
import { connect } from 'react-redux'
import { home as actionCreator } from '../../../store/actionCreators'
import { WriterWrapper } from '../style'

class Writer extends Component {
  getList() {
    const { writer } = this.props
    const { list, pageNo } = writer
    const eleList = []
    if (list.length) {
      for (let i = (pageNo - 1) * 5; i < pageNo * 5; i++) {
        eleList.push(
          <li key={list[i].id} className="item">
            <img className="img" src={list[i].img} alt="" />
            <span className="attention">
              <i className="iconfont iconadd" />
              关注
            </span>
            <div className="info">
              <span className="title">{list[i].title}</span>
              <span className="desc">{list[i].desc}</span>
            </div>
          </li>
        )
      }
    }
    return <ul className="list">{eleList}</ul>
  }
  render() {
    const { writer, handleWriterPageChange } = this.props
    let { pageNo } = writer
    return (
      <WriterWrapper>
        <div className="writer-header">
          <span className="recommend">推荐作者</span>
          <span className="refresh" onClick={() => handleWriterPageChange(++pageNo, this.iconSpin)}>
            <i ref={(icon) => (this.iconSpin = icon)} className="iconfont iconrefresh" />
            换一批
          </span>
        </div>
        {this.getList()}
        <div className="show-all">
          查看全部
          <i className="iconfont iconarrowright" />
        </div>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    writer: state.getIn(['home', 'writer']).toJS()
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleWriterPageChange(pageNo, icon) {
      const degStr = icon.style.transform.replace(/[^-0-9]/gi, '')
      const deg = parseInt(degStr || 0)
      icon.style.transform = `rotate(${deg + 180}deg)`
      dispatch(actionCreator.writerPageChange(pageNo))
    }
  }
}

export default connect(mapState, mapDispatch)(Writer)
