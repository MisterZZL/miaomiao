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
            <li class="swiper-slide">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>

            <li class="swiper-slide">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>
            <li class="swiper-slide swiper-slide-active">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>
            <li class="swiper-slide swiper-slide-active">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>
            <li class="swiper-slide swiper-slide-active">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>
            <li class="swiper-slide swiper-slide-active">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>
            <li class="swiper-slide swiper-slide-active">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>
            <li class="swiper-slide swiper-slide-active">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
              </div>
            </li>
            <li class="swiper-slide swiper-slide-active">
              <div>
                <img
                  src="http://p1.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                  alt
                />
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
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical"
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
      position: relative;
      height: 140px;
      .wrapper {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;

        .swiper-wrapper {
          display: flex;
          // position: relative;
          top: 0;
          li {
            width: 70px;
          }
        }
      }
    }
  }
}
</style>