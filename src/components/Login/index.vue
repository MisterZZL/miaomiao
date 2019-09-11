<template>
  <div class="login_body">
    <div>
      <input v-model="username" class="login_text" type="text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input v-model="password" class="login_text" type="password" placeholder="请输入您的密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" @touchstart="handleToLongin" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
import { login } from "../../api/login.js";
import { messageBox } from "../JS/index";
// console.log(messageBox)
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleToLongin(username, password) {
      login(this.username, this.password).then(res => {
        let that = this
        if (res.status === 0) {
          messageBox({
            title: "登录",
            content: "登录成功",
            ok: "确定",
            handleOk(){
              that.$router.push('/mine/center')
            },
          });
        }else{
          messageBox({
            title: "登录",
            content: "登录失败",
            ok: "确定"
          });
        }
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.login_body {
  .login_text {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px #ccc solid;
    margin-bottom: 5px;
    outline: none;
    text-indent: 10px;
  }
  .login_btn {
    height: 50px;
    margin: 10px;
    input {
      width: 100%;
      height: 100%;
      background: #e54847;
      border-radius: 3px;
      border: none;
      color: white;
      font-size: 20px;
    }
  }
  .login_link {
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      margin: 0 10px;
      font-size: 12px;
      color: #e54847;
    }
  }
}
</style>