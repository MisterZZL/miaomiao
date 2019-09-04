<template>
  <div id="detailContainer">
    <div id="head">
      <Header id="header" title="影片详情">
        <i class="iconfont icon-right"></i>
      </Header>
    </div>

    <div id="content" class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_content" style="background-image: url('http://p0.meituan.net/148.208/movie/b8821d597382e319f9679b7e24e49d113204356.jpg');">
          <div class="detail_list_img">
            <img
              src="http://p0.meituan.net/148.208/movie/b8821d597382e319f9679b7e24e49d113204356.jpg"
            />
          </div>
          <div class="detail_list_info">
            <h2>老师·好</h2>
            <p>Song of Youth</p>
            <p>0</p>
            <p>剧情,喜剧</p>
            <p>中国大陆 / 111分钟</p>
            <p>2019-09-05大陆重映</p>
          </div>
        </div>
      </div>

      <div class="detail_intro">
        <p>1985年的南宿一中，苗宛秋（于谦 饰）老师推自行车昂首走在校园，接受着人们艳羡的目光和纷至沓来的恭维。 桀傲不驯的洛小乙（王广源 饰）、温婉可人的安静（汤梦佳 饰）、新潮前卫的关婷婷（秦鸣悦 饰）、大智若愚的脑袋、舞痴兄弟文明（郝鹏飞 饰）建设（郜玄铭 饰）、八婆海燕（徐紫茵 饰）、奸商耗子（孙艺杨 饰）……三班是一个永远也不缺故事的集体。 苗宛秋怎么也不会想到，他即将走进的这个三班将会成为他以及他身边这辆自行车的噩梦。三班的同学也没有想到，这位新来的老师改变了他们的一生。</p>
      </div>

      <div class="detail_player">
        <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
          <li class="swiper-slide swiper-slide-active">
            <div>
              <img
                src="http://p0.meituan.net/140.127/movie/73ef1fd5f7d7d2740d969de6009c2a6c646756.jpg"
                alt
              />
            </div>
          </li>
          <li class="swiper-slide swiper-slide-next">
            <div>
              <img
                src="http://p0.meituan.net/140.127/movie/09bb1efcaff16e0ec22b987f4a5a1932587577.jpg"
                alt
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "detail",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header
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
      .detail_list_content {
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex: 2;
        background-repeat:no-repeat;



        .detail_list_img img {
          width: 108px;
          height: 150px;
          border: solid 1px #f0f2f3;
          margin: 20px;
        }
        .detail_list_info {
            margin: 20px 0;
            h2{
                font-size: 20px; color:white; font-weight: normal; line-height: 40px;
            }
            p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
        }
      }
    }
    .detail_intro {
    }
    .detail_player {
    }
  }
}
</style>