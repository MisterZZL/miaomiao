<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in nowPlayingList" :key="item.id">
        <div class="pic_show">
          <!-- 128.180这个参数需要加引号 -->
          <img :src="item.img | setWH('128.180')"/>
        </div>
        <div class="info_list">
          <h2>
            {{item.nm}}
            <img v-if="item.version"
              src="../../assets/maxs.png"
            />
          </h2>
          <p>
            观众评
            <span class="grade">{{item.sc}}</span>
          </p>
          <p>{{item.star}}</p>
          <p>{{item.showInfo}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
      
    </ul>
  </div>
</template>


<script>
import { nowPlaying } from "../../api/movie";
export default {
  name: "nowPlaying",
  data() {
    return {
      nowPlayingList: []
    };
  },
  methods: {
    getNowPlaying() {
      nowPlaying().then(res => {
        // console.log(res);
        if (res.status === 0) {
          this.nowPlayingList = res.data.movieList;
          // console.log(this.nowPlayingList);
        }
      });
    }
  },

  mounted() {
    this.getNowPlaying();
  }
};
</script>

<style lang="scss" scoped>
/* 电影列表的样式*/
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
      border-bottom: 1px solid #e6e6e6;
      padding-bottom: 10px;

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
          img {
            width: 50px;
            position: absolute;
            right: 10px;
            top: 5px;
          }
        }
        p {
          font-size: 13px;
          color: #666;
          line-height: 22px;
          width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          .grade {
            font-weight: 700;
            color: #faaf00;
            font-size: 15px;
          }
        }
      }
      .btn_mall {
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #f03d37;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
      }
    }
  }
}
</style>