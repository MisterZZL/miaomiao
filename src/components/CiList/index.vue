<template>
  <div data-v-35160c52 data-v-61e0df6e class="cinema_body">
    <div data-v-3c6eb66d data-v-35160c52 class="wrapper">
      <ul data-v-35160c52 data-v-3c6eb66d>
        <li data-v-35160c52 data-v-3c6eb66d>
          <div data-v-35160c52 data-v-3c6eb66d>
            <span data-v-35160c52 data-v-3c6eb66d>中影南方激光影城（民治多米汇店）</span>
            <span data-v-35160c52 data-v-3c6eb66d class="q">
              <span data-v-35160c52 data-v-3c6eb66d class="price">9.9</span> 元起
            </span>
          </div>
          <div data-v-35160c52 data-v-3c6eb66d class="address">
            <span data-v-35160c52 data-v-3c6eb66d>龙华区龙华新区民治大道866号多米汇2楼</span>
            <span data-v-35160c52 data-v-3c6eb66d>1931.8km</span>
          </div>
          <div data-v-35160c52 data-v-3c6eb66d class="card">
            <div data-v-35160c52 data-v-3c6eb66d class="bl">允许退款</div>
            <!---->
            <!---->
            <!---->
            <div data-v-35160c52 data-v-3c6eb66d class="bl">改签</div>
            <!---->
            <div data-v-35160c52 data-v-3c6eb66d class="or">折扣卡</div>
            <div data-v-35160c52 data-v-3c6eb66d class="or">小吃</div>
            <!---->
          </div>
        </li>
        <li data-v-35160c52 data-v-3c6eb66d>
          <div data-v-35160c52 data-v-3c6eb66d>
            <span data-v-35160c52 data-v-3c6eb66d>华夏星光国际影城（南山书城店）</span>
            <span data-v-35160c52 data-v-3c6eb66d class="q">
              <span data-v-35160c52 data-v-3c6eb66d class="price">13.5</span> 元起
            </span>
          </div>
          <div data-v-35160c52 data-v-3c6eb66d class="address">
            <span data-v-35160c52 data-v-3c6eb66d>南山区海德二道南山书城7楼（海雅百货对面）</span>
            <span data-v-35160c52 data-v-3c6eb66d>1946km</span>
          </div>
          <div data-v-35160c52 data-v-3c6eb66d class="card">
            <div data-v-35160c52 data-v-3c6eb66d class="bl">允许退款</div>
            <!---->
            <!---->
            <!---->
            <div data-v-35160c52 data-v-3c6eb66d class="bl">改签</div>
            <!---->
            <!---->
            <div data-v-35160c52 data-v-3c6eb66d class="or">折扣卡</div>
            <div data-v-35160c52 data-v-3c6eb66d class="or">小吃</div>
            <!---->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CiList"
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