<template>
  <div>
    <h1>用户名：</h1>
    <p>{{$store.state.login.username}}</p>
    <p>{{username}}</p>

    <!-- <p v-if="userInfo.data">{{ userInfo.data.username}}</p> -->
    <div>
      <button @click="toLoginOut">退出登录</button>
    </div>
  </div>
</template>

<script>
import { getUser } from "../../api/center.js";
import { loginOut } from "../../api/login.js";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      userInfo: []
    };
  },
  computed: {
    ...mapState("login", ["username"]), // mapState放在计算属性中才起作用
    ...mapMutations("login", ["setUser"]) //mapMutations还可以放在methods中
  },
  methods: {
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
          this.setUser("");
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