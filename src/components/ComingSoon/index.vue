<template>
  <div class="movie_body">
    <ul>
      <li>
        <div class="pic_show">
          <img
            src="http://p1.meituan.net/128.180/movie/c2ea0e5c6b9afb43add575c4d51d2f192279458.jpg"
          />
        </div>
        <div class="info_list">
          <h2>深夜食堂</h2>
          <p>
            <span class="person">45993</span> 人想看
          </p>
          <p>主演: 梁家辉,刘涛,魏晨</p>
          <p>2019-08-30上映</p>
        </div>
        <div class="btn_pre">预售</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
/*
.movie_body {
  flex: 1;
  overflow: auto;
  ul {
    margin: 0 12px;
    overflow: hidden;
    li {
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px #e6e6e6 solid;
      padding-bottom: 10px;
    }
  }
  .pic_show {
    width: 64px;
    height: 90px;

    img {
      width: 100%;
    }
  }
  .info_list {
    margin-left: 10px;
    flex: 1;
    position: relative;
    h2 {
      font-size: 17px;
      line-height: 24px;
      width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p {
      font-size: 13px;
      color: #666;
      line-height: 22px;
      width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .btn_pre {
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      background-color: #3c9fe6;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      cursor: pointer;
    }
  }
}*/

.movie_body {
  flex: 1;
  overflow: auto;
  ul {
    margin: 0 12px;
    overflow: hidden;
    li {
      display: flex;
      margin-top:12px;
      padding-bottom: 10px;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;

      .pic_show {
        width: 64px;
        height: 90px;
        img {
          width: 100%;
        }
      }
      .info_list {
        margin-left: 10px;
        flex: 1;
        // position: relative;
        h2 {
          font-size: 17px;
          line-height: 24px;
          width: 150px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          img {
            width: 50px;
            position: absolute;
            right: 10px;
            top: 5px;
          }
        }
        p {
          width: 200px;
          line-height: 22px;
          font-size: 13px;
          color: #666;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .btn_pre {
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        background-color: #3c9fe6;
      }
    }
  }
}
</style>