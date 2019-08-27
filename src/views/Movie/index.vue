<template>
  <div id="main">
    <Header title="喵喵电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <div class="city_name">
          <span>大连</span>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="hot_swtich">
          <div class="hot_item active">正在热播</div>
          <div class="hot_item">即将上映</div>
        </div>
        <div class="search_entry">
          <i class="iconfont icon-sousuo">?</i>
        </div>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>

      <div class="movie_body">
          <ul>
              <li>
                  <div class="pic_show"><img src="../../../public/img/yyx.jpg"></div>
                  <div class="info_list">
                      <h2>无名之辈</h2>
                      <p>观众评论 <span class="grade">9.2</span></p>
                      <p>主演：陈建斌，刘德华，周星驰</p>
                      <p>今天55家影院放映607厂</p>
                  </div>
                  <div class="btn_mall">购票</div>
              </li>
              <li>
                  <div class="pic_show"><img src="../../../public/img/yyx.jpg"></div>
                  <div class="info_list">
                      <h2>无名之辈</h2>
                      <p>观众评论 <span class="grade">9.2</span></p>
                      <p>主演：陈建斌，刘德华，周星驰</p>
                      <p>今天55家影院放映607厂</p>
                  </div>
                  <div class="btn_mall">购票</div>
              </li>
              <li>
                  <div class="pic_show"><img src="../../../public/img/yyx.jpg"></div>
                  <div class="info_list">
                      <h2>无名之辈</h2>
                      <p>观众评论 <span class="grade">9.2</span></p>
                      <p>主演：陈建斌，刘德华，周星驰</p>
                      <p>今天55家影院放映607厂</p>
                  </div>
                  <div class="btn_mall">购票</div>
              </li>
          </ul>
      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  }
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
  .city_name.active {
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
    .hot_item.active {
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
    }
  }
  .search_entry {
      margin-right: 20px;
      height: 100%;

      i{
          font-size: 24px;
          color: red;
      }
  }
  .search_entry.active{
      color: #ef4238;
      border-bottom: 2px solid #ef4238;
  }
}

/* 电影列表的样式*/
.movie_body{
    flex: 1;
    overflow: auto;

    ul{
        margin: 0 12px;
        overflow: hidden;
        
        li{
            margin-top: 12px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 10px;

            .pic_show{
                width: 64px;
                height: 90px;

                img{
                    width: 100%;
                }
            }

            .info_list{
                margin-left: 10px;
                flex: 1;
                position: relative;

                h2{
                    font-size: 17px;
                    line-height: 24px;
                    width: 150px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                }
                p{
                    font-size: 13px;
                    color: #666;
                    line-height: 22px;
                    width: 200px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow:ellipsis;

                    .grade{
                        font-weight: 700;
                        color: #faaf00;
                        font-size: 15px;
                    }
                }
                img{
                    width: 50px;
                    position: absolute;
                    right: 10px;
                    top: 5px
                }
            }

        }
    } 

    .btn_pre{
        background-color: #3c9fe6;   
    }
}

.btn_mall , .movie_body .btn_pre{
            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            background-color: #f03d37; 
            color: #fff;
            border-radius: 4px;
            font-size: 12px;   
            cursor: pointer;
            }
</style>