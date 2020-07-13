<template>
  <div id="login">
    <el-form class="info" ref="loginForm" :rules="account" :model="loginForm" label-position="right" label-width="auto" show-message >
      <div class="title">LOGIN</div>
      <div class="main">
        <div class="row">
          <p>Login with your account</p>
        </div>
        <el-form-item prop="username">
          <el-input
            placeholder="User Name"
            prefix-icon="el-icon-s-custom"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="password"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <div class="row">
          <el-checkbox v-model="checked">Remember Me</el-checkbox>
          <a href="#">Forget password</a>
        </div>
        <el-form-item>
          <el-button @click="handleLogin">Login</el-button>
        </el-form-item>
        <div class="row">
          <p>
            if you do not have an account,
            <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
// import { requestLogin } from '../api/api';
// import {Login} from '../requests/api'
export default {
  name: "Login",
  data() {
    return {
      logining: false,
      loginForm: {
        username: "",
        password: ""
      },

      account: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true
    };
  },
  methods: {
    handleLogin: async function() {
      let valid = await this.$refs.loginForm.validate();
      if (valid) {
        this.logining = true;
        let loginParams = {
          username: this.loginForm.username,
          password: this.loginForm.password
        };
        // 调用axios登录接口
        await this.$api
          .Login(loginParams)
          .then(res => {
            // debugger;
            let { code, msg, user } = res.data;
            if (code === 200) {
              // elementui中提示组件
              this.$message({
                type: "success",
                message: msg
              });
              // 登陆成功，用户信息就保存在sessionStorage中
              sessionStorage.setItem("user", JSON.stringify(user));
              // 跳转到后台主页面
              console.log("this", this);
              this.$router.push({ path: "/home" });
            } else {
              this.$message({
                type: "error",
                message: msg
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log("error submit!");
        return false;
      }
    }
  }
};
</script>

<style scoped>
@import "../assets/style/Login.css";
</style>
