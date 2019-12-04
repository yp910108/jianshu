import styled from 'styled-components'

export const HomeWrapper = styled.div`
  position: relative;
  margin: 30px auto 0 auto;
  max-width: 960px;
  min-width: 750px;
  padding-right: 300px;
  overflow: hidden;
`
export const HomeMain = styled.div``
export const BannerImg = styled.img`
  width: 100%;
`
export const HomeRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
`
export const BackTop = styled.div`
  position: fixed;
  z-index: 1040;
  right: 40px;
  bottom: 40px;
  border: 1px solid #ccc;
  width: 52px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  cursor: pointer;
  .iconfont {
    display: inline-block;
    transform: rotate(-90deg);
  }
`
export const TopicWrapper = styled.ul`
  margin-left: -18px;
  padding: 20px 0 0;
  overflow: hidden;
`
export const TopicItem = styled.li`
  float: left;
  margin-left: 18px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
`
export const TopicImg = styled.img`
  float: left;
  margin-right: 10px;
  width: 30px;
  height: 30px;
`
export const ArticleWrapper = styled.div``
export const ArticleList = styled.ul``
export const ArticleItem = styled.li`
  padding: 25px 0 20px;
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`
export const ArticleInfo = styled.div`
  margin-right: 160px;
`
export const ArticleTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
export const ArticleImg = styled.img`
  float: right;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  width: 150px;
  height: 100px;
`
export const ArticleDesc = styled.div`
  padding: 10px 0;
  line-height: 24px;
  font-size: 13px;
  color: #999;
`
export const ArticleIconWrapper = styled.div`
  line-height: 14px;
  font-size: 12px;
  color: #b4b4b4;
  .iconfont {
    display: inline-block;
    vertical-align: top;
    margin-right: 5px;
    margin-top: 2px;
    line-height: 1;
    font-size: 12px;
  }
`
export const ArticleDiamond = styled.span`
  margin-right: 10px;
  color: #ea6f5a;
`
export const ArticleAuthor = styled.span`
  margin-right: 10px;
`
export const ArticleComment = styled.span`
  margin-right: 10px;
`
export const LoadMore = styled.div`
  margin: 30px auto 60px;
  border-radius: 20px;
  padding: 13px 15px;
  text-align: center;
  font-size: 15px;
  background-color: #a5a5a5;
  color: #fff;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #9b9b9b;
  }
  &.hide {
    display: none;
  }
`
export const RecommendWrapper = styled.div``
export const BoardWrapper = styled.div`
  margin-top: -5px;
  margin-bottom: 10px;
`
export const BoardItem = styled.img`
  margin-bottom: 3px;
  width: 100%;
`
export const DownLoadWrapper = styled.div`
  margin-bottom: 30px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  padding: 10px 22px;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
`
export const DownLoadImg = styled.img`
  float: left;
  width: 60px;
  height: 60px;
`
export const DownLoadInfo = styled.div`
  margin-left: 70px;
  margin-top: 8px;
  user-select: none;
  cursor: pointer;
`
export const DownLoadInfoTitle = styled.span`
  display: block;
  font-size: 15px;
  color: #333;
  .iconfont {
    margin-left: 3px;
    font-size: 12px;
  }
`
export const DownLoadInfoDesc = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 13px;
  color: #999;
`
export const WriterWrapper = styled.div`
  .writer-header {
    font-size: 14px;
    color: #969696;
    user-select: none;
    cursor: pointer;
    .refresh {
      float: right;
      .iconfont {
        display: inline-block;
        vertical-align: top;
        margin-top: 1px;
        margin-right: 5px;
        font-size: 12px;
        transition: all 0.2s ease-in;
      }
    }
  }
  .list {
    margin-bottom: 20px;
    .item {
      margin-top: 15px;
      line-height: 20px;
      overflow: hidden;
      .img {
        float: left;
        border-radius: 50%;
        border: 1px solid #ddd;
        width: 48px;
        height: 48px;
      }
      .attention {
        float: right;
        font-size: 13px;
        color: #42c02e;
        user-select: none;
        cursor: pointer;
        .iconfont {
          display: inline-block;
          vertical-align: top;
          margin-right: 3px;
          margin-top: 3px;
          line-height: 1;
          font-size: 12px;
        }
      }
      .info {
        margin: 5px 55px 0;
        .title {
          display: block;
          font-size: 14px;
          color: #333;
          cursor: pointer;
        }
        .desc {
          display: block;
          margin-top: 2px;
          font-size: 12px;
          color: #969696;
        }
      }
    }
  }
  .show-all {
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    padding: 7px 7px 7px 12px;
    font-size: 13px;
    text-align: center;
    color: #787878;
    background-color: #f7f7f7;
    user-select: none;
    cursor: pointer;
    .iconfont {
      display: inline-block;
      margin-left: 3px;
      font-size: 12px;
      transform: scale(0.8);
    }
  }
`
