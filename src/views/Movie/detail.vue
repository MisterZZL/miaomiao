<template>
  <div id="detailContainer">
    <div id="head">
      <Header id="header" title="影片详情">
        <i @touchstart="handleToBack" class="iconfont icon-right"></i>
      </Header>
    </div>

    <div id="content" class="contentDetail">
      <div class="detail_list">
        <div class="back" :style="{'background-image' : 'url('+ detailMovie.albumImg +')'}"></div>

        <div class="backcolor"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.albumImg" alt />
          </div>
          <div class="detail_list_info">
            <h2>{{detailMovie.nm}}</h2>
            <p>{{detailMovie.enm}}</p>
            <p>{{ detailMovie.sc }}</p>
            <p>{{ detailMovie.cat }}</p>
            <p>{{ detailMovie.src }} / {{ detailMovie.dur }}分钟</p>
            <p>{{ detailMovie.pubDesc }}</p>
          </div>
        </div>
      </div>

      <div class="detail_intro">
        <p>{{detailMovie.dra}}</p>
      </div>

      <div class="detail_player">
        <div class="wrapper" ref="wrapper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item,index) in detailMovie.photos" :key="index" >
              <div>
                <img :src="item | setWH('140.127')" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import { movieDetail } from "../../api/movieDetail";

import BScroll from "better-scroll";

export default {
  name: "detail",
  data() {
    return {
      detailMovie: {},
      bacimg: ""
    };
  },
  props: ["movieId"], //接收路由中传递的参数Id
  methods: {
    handleToBack() {
      this.$router.back();
    }
  },
  components: {
    Header
  },
  mounted() {
    movieDetail(this.movieId).then(res => {
      if (res.status === 0) {
        this.detailMovie = res.data.detailMovie;
      }
      this.$nextTick(() => {
        var scroll = new BScroll(this.$refs.wrapper, {
          tap: true,
          probeType: 1,
          startX: 0,
          scrollX: true,
        });
      });
    });
  }
};
</script>

<style lang="scss" scope>
#head {
  position: fixed;
  z-index: 1000;
  width: 100%;
}
#detailContainer {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  z-index: 100;
  .contentDetail {
    margin-top: 50px;
    .detail_list {
      height: 200px;
      width: 100%;
      .back {
        height: 100%;
        width: 100%;
        background: 0 50%;
        filter: blur(20px);
        background-size: cover;
        z-index: 1;
      }
      .backcolor {
        height: 200px;
        width: 100%;

        background-color: #40454d;
        opacity: 0.55;
        position: absolute;
        left: 0;
        top: 0;
      }
      .detail_list_content {
        box-sizing: border-box;
        width: 100%;
        height: 200px;
        display: flex;
        flex: 2;
        position: absolute;
        left: 0;
        top: 0;
        .detail_list_img {
          height: 100%;
        }
        .detail_list_img img {
          width: 108px;
          height: 150px;
          border: solid 1px #f0f2f3;
          margin: 20px;
        }
        .detail_list_info {
          margin: 20px 0;
          h2 {
            font-size: 20px;
            color: white;
            font-weight: normal;
            line-height: 40px;
          }
          p {
            color: white;
            line-height: 20px;
            font-size: 14px;
            color: #ccc;
          }
        }
      }
    }
    .detail_intro {
      padding: 10px;
    }

    .detail_player {
      // height: 140px;
      .wrapper {
        margin: 0 auto;
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        overflow: hidden;

        .swiper-wrapper {
          display: flex;
          
          li {
            width: 70px;
            margin-right: 20px;
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>