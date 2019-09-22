<template>
  <div class="findPassword_body">
    <div>
      邮箱：
      <input v-model="email" type="text" class="findPassword_text" />
      <button class="send_verify" @touchstart="getVerify">发送验证码</button>
    </div>

    <div>
      新密码：
      <input v-model="password" type="password" class="findPassword_text" />
    </div>

    <div>
      验证码：
      <input v-model="verify" type="text" class="findPassword_text" />
    </div>

    <div class="findPassword_btn">
      <input @touchstart="findPassword" type="submit" value="立即修改" />
    </div>

    <div class="findPassword_link">
      <routerLink to="/mine/login">立即登录</routerLink>
      <routerLink to="/mine/register">立即注册</routerLink>
    </div>
  </div>
</template>

<script>
import { messageBox } from "../JS/index";
import { get_verify } from "../../api/register";
import { find_password } from "../../api/findPassword";
export default {
  data() {
    return {
      email: "",
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

    async findPassword(){
        let res = await find_password(this.password, this.email, this.verify)
        let that = this;
        if (res.status === 0) {
            messageBox({
              title: "修改密码",
              content: res.msg,
              ok: "确定",
              handleOk() {
                that.$router.push("/mine/login");
              }
            });
          } else {
            messageBox({
              title: "修改密码",
              content: res.msg,
              ok: "确定"
            });
          }
    }

  }
};
</script>


<style lang='scss' scoped>
.findPassword_body {
  .findPassword_text {
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
  .findPassword_btn {
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
  .findPassword_link {
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