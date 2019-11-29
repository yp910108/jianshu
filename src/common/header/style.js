import styled from 'styled-components'
import LogoPicture from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
`
export const HeaderContent = styled.div`
  position: relative;
  min-width: 900px;
  max-width: 1440px;
  margin: 0 auto;
  height: 56px;
`
export const Logo = styled.a`
  float: left;
  width: 100px;
  height: 100%;
  background: url(${LogoPicture});
  background-size: contain;
`

export const Nav = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 960px;
  height: 100%;
`
export const NavItem = styled.div`
  padding: 0 15px;
  height: 56px;
  line-height: 56px;
  float: left;
  cursor: pointer;
  &.home {
    font-size: 17px;
    color: #ea6f5a;
  }
  &.download-app {
    font-size: 17px;
    color: #333;
    &:hover {
      background: #f5f5f5;
    }
  }
`
export const NavSearchWrapper = styled.div`
  position: relative;
  float: left;
  margin-left: 20px;
  margin-top: 9px;
  .iconfont {
    position: absolute;
    right: 5px;
    top: 4px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    color: #ccc;
    cursor: pointer;
  }
  .slide-enter {
    width: 160px;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    width: 240px;
  }
  .slide-exit-active {
    width: 160px;
  }
  &.focused {
    input {
      width: 240px;
    }
    .iconfont {
      background: #999;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input`
  padding: 0 40px 0 20px;
  border: 1px solid #eee;
  border-radius: 40px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  background: #eee;
  color: #333;
  transition: width 500ms;
  outline: none;
  &::placeholder {
    color: #999;
  }
`
export const Addition = styled.div`
  float: right;
  height: 100%;
`
export const Button = styled.button`
  margin: 9px 12px 0;
  padding: 6px 12px;
  height: 38px;
  line-height: 24px;
  outline: none;
  font-size: 15px;
  cursor: pointer;
  &.register,
  &.writing {
    border-radius: 38px;
    border: 1px solid #ea6f5a;
  }
  &.register {
    margin-right: 15px;
    width: 80px;
    color: #ea6f5a;
    &:hover {
      background: rgba(236, 97, 73, 0.05);
    }
  }
  &.writing {
    width: 100px;
    background: #ea6f5a;
    color: #fff;
    &:hover {
      background: #ec6149;
    }
    .iconfont {
      margin-right: 5px;
    }
  }
  &.Aa,
  &.login {
    border: none;
    color: #969696;
  }
  &.Aa {
    vertical-align: top;
    .iconfont {
      font-size: 20px;
    }
  }
`
