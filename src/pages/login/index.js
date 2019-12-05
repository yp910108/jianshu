import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login as actionCreator } from '../../store/actionCreators'
import { LoginWrapper } from './style'

class Login extends Component {
  render() {
    const { isLogin, login } = this.props
    if (isLogin) return <Redirect to="/" />
    return (
      <LoginWrapper>
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="login-box">
          <div className="tabs">
            <span className="tab-item active">登录</span>
            <b>·</b>
            <span className="tab-item">注册</span>
          </div>
          <div className="username">
            <i className="iconfont iconusername" />
            <input ref={(input) => (this.username = input)} type="text" placeholder="手机号或邮箱" />
          </div>
          <div className="password">
            <i className="iconfont iconpassword" />
            <input ref={(input) => (this.password = input)} type="password" placeholder="密码" />
          </div>
          <div className="tips">
            <span className="login-error-tips">登录遇到问题？</span>
          </div>
          <div className="button" onClick={() => login(this.username, this.password)}>
            登录
          </div>
          <div className="more-sign">
            <div className="title">社交帐号登录</div>
            <i className="iconfont iconweibo" />
            <i className="iconfont iconweixin" />
            <i className="iconfont iconqq" />
          </div>
        </div>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(username, password) {
      dispatch(actionCreator.login(username.value, password.value))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)
