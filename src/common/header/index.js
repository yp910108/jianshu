import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login as actionCreatorLogin, header as actionCreator } from '../../store/actionCreators'
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
            <SearchInfoTitleRefresh onClick={() => handlePageChange(++pageNo, this.iconSpin)}>
              <i ref={(icon) => (this.iconSpin = icon)} className="iconfont iconrefresh" />
              换一批
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
    const { isLogin, logout, focused, hotList, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/">
            <Logo />
          </Link>
          <Addition>
            <Button className="Aa">
              <i className="iconfont iconAa" />
            </Button>
            {isLogin ? (
              <Button className="login" onClick={logout}>
                退出
              </Button>
            ) : (
              <Link to="/login">
                <Button className="login">登录</Button>
              </Link>
            )}
            <Button className="register">注册</Button>
            <Link to="/write">
              <Button className="writing">
                <i className="iconfont iconfeather" />
                写文章
              </Button>
            </Link>
          </Addition>
          <Nav>
            <Link to="/">
              <NavItem className="home active">首页</NavItem>
            </Link>
            <NavItem className="download-app">下载App</NavItem>
            <NavSearchWrapper className={focused ? 'focused' : ''}>
              <CSSTransition in={focused} timeout={500} classNames="slide">
                <NavSearch placeholder="搜索" onFocus={() => handleInputFocus(hotList)} onBlur={handleInputBlur} />
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

const mapState = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin']),
    focused: state.getIn(['header', 'focused']), // 等价于 focused: state.get('header').get('focused')
    mouseIn: state.getIn(['header', 'mouseIn']),
    hotList: state.getIn(['header', 'hotList']),
    pageNo: state.getIn(['header', 'pageNo'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    logout() {
      dispatch(actionCreatorLogin.logout())
    },
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreator.getHotList())
      }
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
    handlePageChange(pageNo, icon) {
      const degStr = icon.style.transform.replace(/[^-0-9]/gi, '')
      const deg = parseInt(degStr || 0)
      icon.style.transform = `rotate(${deg + 180}deg)`
      dispatch(actionCreator.pageChange(pageNo))
    }
  }
}

export default connect(mapState, mapDispatch)(Header)
