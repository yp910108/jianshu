import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem, TopicImg } from '../style'

class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <TopicWrapper>
        {topicList.map((item) => {
          return (
            <TopicItem key={item.id}>
              <TopicImg src={item.img} />
              {item.title}
            </TopicItem>
          )
        })}
      </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']).toJS()
  }
}

export default connect(mapState, null)(Topic)
