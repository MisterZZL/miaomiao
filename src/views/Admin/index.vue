<template>
  <div id="main">
    <el-container>
      <el-header>
        喵喵网后台管理系统
        <div class="username">
          <el-avatar
            class="userImg"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          {{$store.state.login.username}}
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">

          <el-menu default-active="2" class="el-menu-vertical-demo">

            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <router-link to="/admin/users" tag="span">用户管理</router-link>
            </el-menu-item>

            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <router-link to="/admin/movie" tag="span">电影管理</router-link>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <router-link to="/admin/cinema" tag="span">影院管理</router-link>
            </el-menu-item>

          </el-menu>

        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { getAdmin } from "../../api/admin";

export default {
  name: "admin",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  beforeRouteEnter(to, from, next) {
    // ...
    getAdmin().then(res => {
      if (res.status === 0) {
        console.log("进后台");
        next();
      } else {
        next("/mine/login");
      }
    });
  }
};
</script>

<style lang="scss" scope>
.username {
  float: right;
  margin-right: 10px;
  height: 100%;
  position: relative;
  .userImg {
    position: absolute;
    right: 20px;
    top: 10px;
  }
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

}

body > .el-container {
  margin-bottom: 40px;
}
</style>