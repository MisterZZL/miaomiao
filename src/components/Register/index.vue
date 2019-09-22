<template>
  <div class="register_body">
    <div>
      邮箱：
      <input v-model="email" type="text" class="register_text" />
      <button class="send_verify" @touchstart="getVerify">发送验证码</button>
    </div>

    <div>
      用户名：
      <input v-model="username" type="text" class="register_text" />
    </div>

    <div>
      密码：
      <input v-model="password" type="password" class="register_text" />
    </div>

    <div>
      确认密码：
      <input type="password" class="register_text" />
    </div>

    <div>
      验证码：
      <input v-model="verify" type="text" class="register_text" />
    </div>

    <div class="register_btn">
      <input @touchstart="regist" type="submit" value="注册" />
    </div>

    <div class="register_link">
      <routerLink to="/mine/login">立即登录</routerLink>
      <routerLink to="/mine/findPassword">找回密码</routerLink>
    </div>
  </div>
</template>

<script>
import { messageBox } from "../JS/index";
import { register, get_verify } from "../../api/register";
export default {
  data() {
    return {
      email: "",
      username: "",
      password: "",
      verify: ""
    };
  },
  methods: {
    getVerify() {
      get_verify(this.email).then(res => {
        let that = this;
        if (res.status === 0) {
          messageBox({
            title: "发送验证码",
            content: res.msg,
            ok: "确定",
          });
        } else {
          messageBox({
            title: "发送验证码",
            content: res.msg,
            ok: "确定"
          });
        }
      }
      
      );
    },
    async regist() {
      let res = await register(this.username, this.password, this.email, this.verify)
            
          let that = this;
          if (res.status === 0) {
            messageBox({
              title: "注册",
              content: res.msg,
              ok: "确定",
              handleOk() {
                that.$router.push("/mine/login");
              }
            });
          } else {
            messageBox({
              title: "注册",
              content: res.msg,
              ok: "确定"
            });
          }
        
      ;
    }
  }
};
</script>


<style lang='scss' scoped>
.register_body {
  .register_text {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px #ccc solid;
    margin-bottom: 5px;
    outline: none;
    text-indent: 10px;
  }
  .send_verify {
    position: absolute;
    right: 10px;
    top: 10px;
    height: 30px;
    border-radius: 3px;
    border: none;
    padding: 5px;
  }
  .register_btn {
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
  .register_link {
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