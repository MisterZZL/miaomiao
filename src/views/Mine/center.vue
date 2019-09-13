<template>
  <div>
    <button @click="toGetUser">查看</button>
    {{userInfo}}
  </div>
</template>

<script>
import { getUser } from "../../api/center.js";
export default {
  data() {
      return{
          userInfo:""
      }
  },
  methods: {
    toGetUser() {
      getUser().then((res)=>{
          this.userInfo=res
      });
    }
  }
};
</script>