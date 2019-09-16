<template>
  <div>
    <div>
      用户名：
      <span>{{$store.state.login.username}}</span>
    </div>
    <div>
      用户名：
      <span>{{username}}</span>
    </div>
    <div>
      <button @click="toLoginOut">退出登录</button>
    </div>
  </div>
</template>

<script>
import { getUser } from "../../api/center.js";
import { loginOut } from "../../api/login.js";
import { mapState, mapMutations } from "vuex";
import { setToken } from "../../axios/set_and_get_Token";

export default {
  data() {
    return {
      userInfo: []
    };
  },
  computed: {
    ...mapState("login", ["username"]) // mapState放在计算属性中才起作用
  },
  methods: {
    // ...mapMutations("login", ["setUser"]), //mapMutations还可以放在methods中
    toGetUser() {
      getUser().then(res => {
        if (res.status === 0) {
          this.userInfo = res;
        } else {
          this.userInfo = "未登录";
        }
      });
    },
    toLoginOut() {
      loginOut().then(res => {
        if (res.status === 0) {
          setToken("token", "");// 退出登录，直接清楚本地token
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