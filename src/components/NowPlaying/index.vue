<template>
  <div class="movie_body">
    <Loading v-if="$store.state.loadding.isShowLodingOrNot"></Loading>
    <Scroller :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li class="pullDown">{{pullDownMsg}}</li>
        <li v-for="item in nowPlayingList" :key="item.id">
          <div @tap="handleToDetail(item.id)" class="pic_show">
            <!-- 128.180这个参数需要加引号 -->
            <img :src="item.img | setWH('128.180')" />
          </div>
          <div @tap="handleToDetail(item.id)" class="info_list">
            <h2>
              {{item.nm}}
              <img v-if="item.version" src="../../assets/maxs.png" />
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
    </Scroller>
  </div>
</template>


<script>
import { nowPlaying } from "../../api/movie";
export default {
  name: "nowPlaying",
  data() {
    return {
      nowPlayingList: [],
      pullDownMsg: "", //下拉是顶部显示信息
      currentCityId: -1 //初始化一个当前城市ID，用作与本地存储对比
    };
  },
  methods: {
    getNowPlaying(id) {
      nowPlaying(id).then(res => {    
        if (res.status === 0) {
          this.nowPlayingList = res.data.movieList;
        }
      });
    },
    /* 下拉刷新 */
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDownMsg = "正在更新";
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        nowPlaying(this.$store.state.city.id).then(res => {
          if (res.status === 0) {
            this.pullDownMsg = "更新已完成";
            setTimeout(() => {
              this.nowPlayingList = res.data.movieList;
              this.pullDownMsg = "";
            }, 1000);
          }
        });
      }
    },
    //点击进入详情页面
    handleToDetail(movieId) {
      this.$router.push("/movie/detail/" + movieId);
    }
  },

  activated() {
    let cityId = this.$store.state.city.id;
    if (this.currentCityId == cityId) {
      return;
    }
    this.getNowPlaying(cityId);
    this.currentCityId = cityId;
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
    .pullDown {
      margin: 0;
      padding: 0;
      border: none;
    }
    li {
      margin-top: 12px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      padding-bottom: 10px;

      .pullDown {
        margin: 0;
        padding: 0;
        border: none;
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