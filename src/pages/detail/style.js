import styled from 'styled-components'

export const DetailWrapper = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  .container {
    margin: 0 auto;
    max-width: 1000px;
    border-radius: 4px;
    padding: 24px;
    background-color: #fff;
    .title {
      margin-bottom: 20px;
      font-weight: 700;
      font-size: 30px;
    }
    .author-info {
      .avatar {
        float: left;
        border-radius: 50%;
        border: 1px solid #eee;
        width: 48px;
        height: 48px;
      }
      .info {
        margin-left: 56px;
        .author {
          line-height: 22px;
          font-weight: 500;
          font-size: 16px;
          .favorite {
            display: inline-block;
            vertical-align: top;
            margin-left: 8px;
            border-radius: 50px;
            border: 1px solid #ec7259;
            padding: 4px 10px;
            line-height: 1;
            font-size: 12px;
            color: #ec7259;
            user-select: none;
            cursor: pointer;
          }
        }
        .desc {
          margin-top: 8px;
          font-size: 13px;
          color: #969696;
          .diamond {
            color: #ea6f5a;
            .iconfont {
              display: inline-block;
              vertical-align: top;
              margin-right: 5px;
              margin-top: 2px;
              line-height: 1;
              font-size: 12px;
            }
          }
          .diamond,
          .date,
          .font-number,
          .read-number {
            margin-right: 10px;
          }
        }
      }
    }
    .content {
      margin-top: 30px;
      padding: 20px 0;
      img {
        display: block;
        margin: 0 auto;
        max-width: 90%;
      }
      p {
        margin-bottom: 20px;
        line-height: 1.8;
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
`
