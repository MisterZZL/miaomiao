<template>
  <div>
    <div>
      用户名：
      <span>{{$store.state.login.username}}</span>
      <br />
      <!-- <span>第二种获取status中值的方法,用户名:{{username}}</span> -->
    </div>
    isAdmin:{{$store.state.mine.isAdmin}}
    <div class="headImg">
      <img :src="$store.state.mine.userHead" />
      <input type="file" name="file" value="上传图像" />
    </div>
    <div v-if="$store.state.mine.isAdmin">
      用户身份：
      <span>
        管理员
        <a href="/admin" target="blank">进入后台管理</a>
      </span>
    </div>

    <div v-else>
      用户身份：
      <span>
        <a>普通用户</a>
      </span>
    </div>

    <div>
      <button @click="toLoginOut">退出登录</button>
    </div>
  </div>
</template>

<script>
import { getUser } from "../../api/center.js";
import { loginOut } from "../../api/login.js";
import { mapState, mapActions } from "vuex";
import { setToken } from "../../axios/set_and_get_Token";

export default {
  name: "center",
  data() {
    return {
      userInfo: []
    };
  },
  // computed: {
  //   ...mapState("login", ["username"]) // mapState放在计算属性中才起作用
  // },
  methods: {
    // 获取用户信息
    ...mapActions("mine", ["GET_USERINFO"]), //mapMutations还可以放在methods中
    toGetUser() {
      this.GET_USERINFO();
    },

    toLoginOut() {
      loginOut().then(res => {
        if (res.status === 0) {
          setToken("token", ""); // 退出登录，直接清楚本地token
          this.$router.push("/mine/login");
        }
      });
    }
  },
  mounted() {
    this.toGetUser();
  }
};
</script>

<style lang="scss">
.headImg {
  float: right;
  right: 0;
  position: absolute;
  width: 69px;
  top: 0;
 img {
    width: 100%;
  }
}

</style>