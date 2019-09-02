<template>
  <div class="city_body">
    <Loading v-if="$store.state.loadding.isShowLodingOrNot"></Loading>
    <div class="city_list">
      <Scroller ref="city_list">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li
                v-for="item in hotList"
                :key="item.index"
                @tap="handleToCity(item.nm,item.id)"
              >{{item.nm}}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.id">
              <h2>{{item.index}}</h2>
              <ul>
                <li v-for="it in item.list" :key="it.id" @tap="handleToCity(it.nm,it.id)">{{it.nm}}</li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>

    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cityList"
          :key="item.id"
          @touchstart="handleToIndex(index)"
        >{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { city } from "../../api/city";
import { mapMutations } from "vuex";

export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: []
    };
  },
  methods: {
    //请求api 获取城市列表数据
    getCity() {
      let cities = [];
      city().then(res => {
        if (res.status === 0) {
          cities = res.data.cities;
          let { cityList, hotList } = this.formatCityList(cities);
          this.cityList = cityList;
          this.hotList = hotList;

          // 将城市列表保存到本地
          window.localStorage.setItem("cityList", JSON.stringify(cityList));
          window.localStorage.setItem("hotList", JSON.stringify(hotList));
        }
      });
    },
    //格式话城市列表
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];
      //提取出热门城市
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]);
        }
      }

      for (var i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase(); // 每个城市首字母
        if (toCom(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }

      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });

      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      return {
        cityList,
        hotList
      };
    },

    //点击城市列表右侧的字母跳滚动到对应位置
    handleToIndex(index) {
      // 找到A、B、C...等
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      //设置A、B、C...距离上方或上层控件的位置
      this.$refs.city_list.toScrollTop(-h2[index].offsetTop);
    },
    // 切换城市并保存到本地
    ...mapMutations("city",["CITY_INFO"]),
    handleToCity(nm, id) {
      // this.$store.commit("city/CITY_INFO", { nm, id });
      this.CITY_INFO({ nm, id });
      window.localStorage.setItem("nowNm", nm);
      window.localStorage.setItem("nowId", id);
      this.$router.push("/movie/nowPlaying");
    }
  },
  mounted() {
    let cityList = window.localStorage.getItem("cityList");
    let hotList = window.localStorage.getItem("hotList");
    if (hotList && cityList) {
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
    } else {
      this.getCity();
    }
  }
};
</script>

<style lang="scss" scoped>
.city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  .city_list {
    flex: 1;
    overflow: auto;
    background: #fff5f0;
    .city_hot {
      margin-top: 20px;
      h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul li {
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 3%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
      }
    }
    .city_sort {
      div {
        margin-top: 20px;
      }
      h2 {
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: normal;
      }
      ul {
        padding-left: 10px;
        margin-top: 10px;
        li {
          line-height: 30px;
          line-height: 30px;
        }
      }
    }
  }

  .city_index {
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px #e6e6e6 solid;
  }
}
</style>