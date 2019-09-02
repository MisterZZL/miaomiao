<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">
      <div data-v-61e0df6e class="cinema_menu">
        <div data-v-61e0df6e class="city_switch">
          全城
          <i data-v-61e0df6e class="iconfont icon-lower-triangle"></i>
        </div>
        <div data-v-61e0df6e class="brand_swtich">
          品牌
          <i data-v-61e0df6e class="iconfont icon-lower-triangle"></i>
        </div>
        <div data-v-61e0df6e class="feature_switch">
          特色
          <i data-v-61e0df6e class="iconfont icon-lower-triangle"></i>
        </div>
      </div>

      <keep-alive>
        <!-- <router-view /> -->
        <CiList />
      </keep-alive>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
import CiList from "../../components/CiList";
export default {
  name: "Cinema",
  data(){
    return{}
  },
  components: {
    Header,
    CiList,
    TabBar
  },

};
</script>
<style lang="scss" scope>
.cinema_menu {
  display: flex;
  height: 45px;
  text-align: center;
  width: 100%;
  align-items: center;
  background: white;
  border-bottom: 1px solid #e6e6e6;
  justify-content: space-around;
}
</style>