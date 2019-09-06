<template>
  <div class="movie_body">
    <Loading v-if="$store.state.loadding.isShowLodingOrNot"></Loading>
    <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li class="pullDown">{{pullDownMsg}}</li>
        <li v-for="item in comingSoonList" :key="item.id">
          <div @tap="handleToDetail(item.id)" class="pic_show">
            <img :src="item.img | setWH('128.180')" />
          </div>
          <div @tap="handleToDetail(item.id)" class="info_list">
            <h2>{{item.nm}}</h2>
            <p>
              <span class="person">{{item.wish}}</span> 人想看
            </p>
            <p>{{item.star}}</p>
            <p>{{item.rt}}</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
import { comingSoon } from "../../api/movie";
export default {
  name: "ComingSoon",
  data() {
    return {
      comingSoonList: [],
      pullDownMsg: "",
      currentCityId: -1
    };
  },
  methods: {
    getComingSoon(id) {
      comingSoon(id).then(res => {
        if (res.status === 0) {
          this.comingSoonList = res.data.comingList;
        }
      });
    },
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDownMsg = "正在更新";
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        comingSoon().then(res => {
          if (res.status === 0) {
            this.pullDownMsg = "更新已完成";
            setTimeout(() => {
              this.comingSoonList = res.data.comingList;
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
    this.getComingSoon(cityId);
    this.currentCityId = cityId;
  }
};
</script>

<style lang="scss" scoped>
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
      display: flex;
      margin-top: 12px;
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