import React from 'react'
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
  NavSearch
} from './style'

const Header = (props) => {
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
          <NavSearchWrapper className={props.focused ? 'focused' : ''}>
            <CSSTransition in={props.focused} timeout={500} classNames="slide">
              <NavSearch placeholder="搜索" onFocus={props.handleInputFocus} onBlur={props.handleInputBlur} />
            </CSSTransition>
            <i className="iconfont iconsearch" />
          </NavSearchWrapper>
        </Nav>
      </HeaderContent>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.searchFocusAction())
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlurAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
