import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from '../../common/header'
import { home as actionCreator } from '../../store/actionCreators'
import { HomeWrapper, HomeMain, BannerImg, HomeRight, BackTop } from './style'
import { Topic, Article, Recommend, Writer } from './components'

class Home extends Component {
  scrollTop() {
    window.scrollTo(0, 0)
  }
  render() {
    const { visibleBackTop } = this.props
    return (
      <Fragment>
        <Header />
        <HomeWrapper>
          <HomeMain>
            <BannerImg src="https://upload.jianshu.io/admin_banners/web_images/4808/7ece686fca11cf9350aa4db3704246f117dbba0c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
            <Topic />
            <Article />
          </HomeMain>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {visibleBackTop ? (
            <BackTop onClick={this.scrollTop}>
              <i className="iconfont iconarrowright" />
            </BackTop>
          ) : null}
        </HomeWrapper>
      </Fragment>
    )
  }
  componentDidMount() {
    const { getHomePage, documentScroll } = this.props
    getHomePage()
    document.addEventListener('scroll', documentScroll)
  }
  componentWillUnmount() {
    const { documentScroll } = this.props
    document.removeEventListener('scroll', documentScroll)
  }
}

const mapState = (state) => {
  return {
    visibleBackTop: state.getIn(['home', 'visibleBackTop'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomePage() {
      dispatch(actionCreator.getHomePage())
    },
    documentScroll() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreator.toggleVisibleBackTop(true))
      } else {
        dispatch(actionCreator.toggleVisibleBackTop(false))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Home)
