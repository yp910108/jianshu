import styled from 'styled-components'
import LogoPicture from '../../statics/login-logo.png'

export const LoginWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  font-size: 14px;
  text-align: center;
  background-color: #f1f1f1;
  color: #969696;
  .logo {
    position: absolute;
    top: 56px;
    left: 50px;
    width: 100px;
    height: 46px;
    background-position: center;
    background-size: contain;
    background-image: url(${LogoPicture});
    cursor: pointer;
  }
  .login-box {
    display: inline-block;
    vertical-align: middle;
    margin: 60px auto 0;
    border-radius: 4px;
    padding: 50px 50px 30px;
    width: 400px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    user-select: none;
    .tabs {
      .tab-item {
        display: inline-block;
        padding: 10px;
        text-align: center;
        font-weight: 400;
        font-size: 18px;
        cursor: pointer;
        &.active {
          border-bottom: 2px solid #ea6f5a;
          font-weight: 700;
          color: #ea6f5a;
        }
      }
      b {
        padding: 10px;
        font-weight: 700;
      }
    }
    .username,
    .password {
      position: relative;
      .iconfont {
        position: absolute;
        left: 12px;
        top: 16px;
        line-height: 1;
        font-size: 18px;
      }
      input {
        border: 1px solid #c8c8c8;
        padding: 4px 12px 4px 35px;
        width: 100%;
        height: 50px;
        font-size: 14px;
        color: #969696;
        outline: none;
      }
    }
    .username {
      margin-top: 50px;
      input {
        border-radius: 4px 4px 0 0;
      }
    }
    .password {
      input {
        border-top: none;
        border-radius: 0 0 4px 4px;
      }
    }
    .tips {
      margin: 15px 0;
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      .login-error-tips {
        float: right;
        cursor: pointer;
        &:hover {
          color: #666;
        }
      }
    }
    .button {
      margin-top: 20px;
      border-radius: 25px;
      padding: 13px 18px;
      width: 100%;
      font-size: 18px;
      background: #3194d0;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: #187cb7;
      }
    }
    .more-sign {
      margin: 50px 0 10px;
      .title {
        position: relative;
        margin-bottom: 10px;
        font-size: 12px;
        &:before,
        &:after {
          content: '';
          position: absolute;
          top: 5px;
          border-top: 1px solid #b5b5b5;
          width: 60px;
        }
        &:before {
          left: 30px;
        }
        &:after {
          right: 30px;
        }
      }
      .iconfont {
        display: inline-block;
        margin: 0 5px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 28px;
        cursor: pointer;
      }
      .iconweibo {
        color: #e05244;
      }
      .iconweixin {
        color: #00bb29;
      }
      .iconqq {
        color: #498ad5;
      }
    }
  }
`
