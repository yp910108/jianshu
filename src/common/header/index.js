import React, { Component } from 'react'
import { connect } from 'react-redux'
import { header as actionCreator } from '../../store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Nav,
  Addition,
  Button,
  NavItem,
  NavSearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoTitleRefresh,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component {
  getListArea() {
    let { focused, mouseIn, hotList, pageNo, mouseEnter, mouseLeave, handlePageChange } = this.props
    const newHotList = hotList.toJS()
    const eleList = []
    if (newHotList.length) {
      for (let i = (pageNo - 1) * 10; i < pageNo * 10; i++) {
        eleList.push(<SearchInfoItem key={newHotList[i]}>{newHotList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoTitleRefresh onClick={() => handlePageChange(++pageNo)}>
              <i className="iconfont iconrefresh"></i>换一批
            </SearchInfoTitleRefresh>
          </SearchInfoTitle>
          <SearchInfoList>{eleList}</SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Logo href="/" />
          <Addition>
            <Button className="Aa">
              <i className="iconfont iconAa" />
            </Button>
            <Button className="login">登录</Button>
            <Button className="register">注册</Button>
            <Button className="writing">
              <i className="iconfont iconfeather" />
              写文章
            </Button>
          </Addition>
          <Nav>
            <NavItem className="home active">首页</NavItem>
            <NavItem className="download-app">下载App</NavItem>
            <NavSearchWrapper className={focused ? 'focused' : ''}>
              <CSSTransition in={focused} timeout={500} classNames="slide">
                <NavSearch placeholder="搜索" onFocus={handleInputFocus} onBlur={handleInputBlur} />
              </CSSTransition>
              <i className="iconfont iconsearch" />
              {this.getListArea(focused)}
            </NavSearchWrapper>
          </Nav>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']), // 等价于 focused: state.get('header').get('focused')
    mouseIn: state.getIn(['header', 'mouseIn']),
    hotList: state.getIn(['header', 'hotList']),
    pageNo: state.getIn(['header', 'pageNo'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.getHotList())
      dispatch(actionCreator.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur())
    },
    mouseEnter() {
      dispatch(actionCreator.mouseEnter())
    },
    mouseLeave() {
      dispatch(actionCreator.mouseLeave())
    },
    handlePageChange(pageNo) {
      dispatch(actionCreator.pageChange(pageNo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
