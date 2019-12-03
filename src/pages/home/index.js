import React, { Component } from 'react'
import { connect } from 'react-redux'
import { home as actionCreator } from '../../store/actionCreators'
import { HomeWrapper, HomeMain, BannerImg, HomeRight } from './style'
import { Topic, Article, Recommend, Writer } from './components'

class Home extends Component {
  render() {
    return (
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
      </HomeWrapper>
    )
  }
  componentDidMount() {
    const { getHomePage } = this.props
    getHomePage()
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomePage() {
      dispatch(actionCreator.getHomePage())
    }
  }
}

export default connect(null, mapDispatch)(Home)
