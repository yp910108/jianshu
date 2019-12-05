import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../../common/header'
import { WriteWrapper } from './style'

class Write extends Component {
  render() {
    const { isLogin } = this.props
    if (!isLogin) return <Redirect to="/login" />
    return (
      <Fragment>
        <Header />
        <WriteWrapper>this is write page...</WriteWrapper>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    isLogin: state.getIn(['login', 'isLogin'])
  }
}

export default connect(mapState, null)(Write)
