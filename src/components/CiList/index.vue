<template>
  <div class="cinema_body">
    <Loading v-if="$store.state.isShowLodingOrNot"></Loading>
    <Scroller>
      <ul>
        <li v-for="item in cinemaList" :key="item.id">
          <div>
            <span>{{item.nm}}</span>
            <span class="q">
              <span class="price">{{item.sellPrice}}</span> 元起
            </span>
          </div>
          <div class="address">
            <span>{{item.addr}}</span>
            <span>{{item.distance}}</span>
          </div>
          <div class="card">
            <div class="bl" v-if="item.tag.allowRefund">允许退款</div>
            <div class="bl" v-if="item.tag.endorse">改签</div>
            <div class="or" v-if="item.tag.sell">折扣卡</div>
            <div class="or" v-if="item.tag.snack">小吃</div>
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
import {cinema} from '../../api/cinema'


export default {
  name: "CiList",
  components:{

  },
  data(){
    return{
      cinemaList:[]
    }
  },
  mounted(){
    cinema().then((res)=>{
      if(res.status===0){
        this.cinemaList=res.data.cinemas
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.cinema_body {
  flex: 1;
  overflow: auto;
  ul {
    padding: 20px;
    li {
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 20px;
      div {
        margin-bottom: 10px;
        .q {
          font-size: 11px;
          color: #f03d37;
        }
        .price {
          font-size: 18px;
        }
      }
      .address {
        font-size: 13px;
        color: #666;
        span:nth-of-type(2) {
          float: right;
        }
      }
      .card {
        display: flex;
        div {
          padding: 0 3px;
          height: 15px;
          line-height: 15px;
          border-radius: 2px;
          font-size: 13px;
          margin-right: 5px;
        }
        .or {
          color: #f90;
          border: 1px solid #f90;
        }
        .bl {
          color: #589daf;
          border: 1px solid #589daf;
        }
      }
    }
  }
}
</style>