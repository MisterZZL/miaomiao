<template>
  <div id="main">
    <el-container>
  <el-header>喵喵网后台管理系统
    <span class="username">{{$store.state.login.username}}</span>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>


<script>
import { getAdmin } from "../../api/admin";

export default {
  name: "admin",
  beforeRouteEnter(to, from, next) {
    // ...
    getAdmin().then(res => {
      if (res.status === 0) {
        console.log("进后台")
        next();
      } else {
        next("/mine/login");
      }
    });
  }
};
</script>

<style lang="scss" scope>
.username{
  float: right;
  margin-right: 10px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

</style>