<template>
  <div id="main">
    <Header title="喵喵电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>大连</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import NowPlaying from "../../components/NowPlaying";


export default {
  name: "Movie",
  
  components: {
    Header,
    NowPlaying,
    TabBar
  },

};
</script>
<style lang="scss" scoped>
/* 城市 正在热播 即将上映 搜索等导航的样式*/
.movie_menu {
  display: flex;
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-between;

  .city_name {
    margin-left: 20px;
    height: 100%;
  }
  .city_name.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
  }
  .hot_swtich {
    display: flex;
    height: 100%;

    .hot_item {
      font-size: 15px;
      color: #666;
      width: 80px;
      text-align: center;
      margin: 0 12px;
      font-weight: 700;
    }
    .hot_item.router-link-active {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
  }
  .search_entry {
    margin-right: 20px;
    height: 100%;

    i {
      font-size: 24px;
      color: red;
    }
  }
  .search_entry.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
  }
}
</style>