import React, { Component } from 'react'
import { connect } from 'react-redux'
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

class Header extends Component {
  render() {
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
            <NavSearchWrapper>
              <NavSearch placeholder="搜索" />
              <i className="iconfont iconsearch" />
            </NavSearchWrapper>
          </Nav>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
