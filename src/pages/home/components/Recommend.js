import React, { Component } from 'react'
import {
  RecommendWrapper,
  BoardWrapper,
  BoardItem,
  DownLoadWrapper,
  DownLoadImg,
  DownLoadInfo,
  DownLoadInfoTitle,
  DownLoadInfoDesc
} from '../style'

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <BoardWrapper>
          <BoardItem src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"></BoardItem>
          <BoardItem src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"></BoardItem>
          <BoardItem src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"></BoardItem>
          <BoardItem src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"></BoardItem>
        </BoardWrapper>
        <DownLoadWrapper>
          <DownLoadImg src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
          <DownLoadInfo>
            <DownLoadInfoTitle>
              下载简书手机App
              <i className="iconfont iconarrowright" />
            </DownLoadInfoTitle>
            <DownLoadInfoDesc>随时随地发现和创作内容</DownLoadInfoDesc>
          </DownLoadInfo>
        </DownLoadWrapper>
      </RecommendWrapper>
    )
  }
}

export default Recommend
