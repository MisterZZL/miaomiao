<template>
  <div class="search_body">
    <Loading v-if="$store.state.loadding.isShowLodingOrNot"></Loading>
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="keyword" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li v-for="item in searchResult" :key="item.id">
          <div class="img">
            <img :src="item.img | setWH('128.180')" />
          </div>
          <div class="info">
            <p>
              <span>{{item.nm}}</span>
              <span>{{item.sc}}</span>
            </p>
            <p>{{item.enm}}</p>
            <p>{{item.cat}}</p>
            <p>{{item.pubDesc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { search } from "../../api/search";
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      keyword: "",
      searchResult: [],
    };
  },
  methods: {
    cancelRequest() {// 取消搜索时的多次请求
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    }
  },
  watch: {
    keyword(newVal) {
      let that = this;
      var cityId = this.$store.state.city.id
      this.cancelRequest()
      search(newVal,cityId, {
        cancelToken: new axios.CancelToken(function(c) {
          that.source = c;
        })
      })
        .then(res => {
          if (res.data.movies && res.status === 0) {
            this.searchResult = res.data.movies.list;
          }
        })
        .catch(err => {
          if (axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            console.log(err);
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.search_body {
  flex: 1;
  overflow: auto;
  .search_input {
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .search_input_wrapper {
      padding-left: 10px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      background-color: #fff;
      display: flex;
      line-height: 20px;
      i {
        // font-size: 16px;
        padding: 4px 0;
      }
      input {
        border: none;
        width: 100%;
        font-size: 13px;
        color: #333;
        padding: 4px 0;
        outline: none;
      }
    }
  }
  .search_result {
    h3 {
      font-size: 15px;
      color: #999;
      padding: 9px 15px;
      border-bottom: 1px solid #e6e6e6;
    }
    li {
      border-bottom: 1px #c9c9c9 dashed;
      padding: 10px 15px;
      box-sizing: border-box;
      display: flex;
      .img {
        width: 60px;
        float: left;
        img {
          width: 100%;
        }
      }
      .info {
        margin-left: 15px;
        flex: 1;
        p {
          height: 22px;
          display: flex;
          line-height: 22px;
          font-size: 12px;
          span:nth-of-type(1) {
            font-size: 18px;
            flex: 1;
          }
          span:nth-of-type(2) {
            font-size: 16px;
            color: #fc7103;
          }
        }
      }
    }
  }
}
</style>