<template>
  <div>
    {{userInfo}}
    <button @click="toLoginOut">退出</button>
  </div>
</template>

<script>
import { getUser } from "../../api/center.js";
import { loginOut } from "../../api/login.js";

export default {
  data() {
    return {
      userInfo: ""
    };
  },
  methods: {
    toGetUser() {
      getUser().then(res => {
        this.userInfo = res;
      });
    },
    toLoginOut() {
      loginOut().then(res => {
        if (res.status === 0) {
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