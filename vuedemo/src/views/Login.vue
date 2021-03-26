<template>
  <div id="login">
    <span class="iotSys_name">物联网监测系统</span>
    <div class="login_input" align="center">
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef">
        <!--用户名-->
        <el-form-item prop="userName" style="margin-top:10px;">
          <el-row>
            <el-col :span=2>
              <span class="el-icon-s-custom"></span>
            </el-col>
            <el-col :span=22>
              <el-input class="login_input_userName" placeholder='账号' v-model="loginForm.userName"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="passWord">
          <el-row>
            <el-col :span=2>
              <span class="el-icon-lock"></span>
            </el-col>
            <el-col :span=22>
              <el-input class="login_input_password" type="password" placeholder='密码'
                        v-model="loginForm.passWord"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <!--登陆按钮-->
        <el-form-item style="margin-top:50px; ">
          <el-button type="primary" round class="submitBtn" @click="iotLogin()">登录</el-button>
          <router-link :to="{path:'/HomePage'}">
          <el-button type="primary" round class="submitBtn">登录</el-button>
          </router-link>
          <el-button type="info" round class="submitBtn" @click="resetLoginFrom()">重置</el-button>
        </el-form-item>
        <div class="unlogin">
          <router-link :to="{ path: '/forgetpwd'}" style="text-decoration: none;color: white">忘记密码</router-link>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {//登陆表单数据对象
          userName: 'admin',
          passWord: 'admin'
        },
        loginRules: {//登陆表单验证规则
          userName: [
            {required: true, message: "请输入账号", trigger: 'blur'},
            {min: 3, max: 5, message: '长度在3到10个字符', trigger: 'blur'}
          ],
          passWord: [
            {required: true, message: "请输入密码", trigger: "blur"},
            {min: 5, max: 15, message: '长度在5到15个字符', trigger: 'blur'}
          ]
        }
      }
    },
    mounted: function () {

    },
    methods: {
      iotLogin() {//登陆
        this.$refs.loginFormRef.validate(async (valid) => {
          if (!valid) return;
          const {data: res} = await this.$http.post('login', this.loginForm);
          console.log(res);
        })
      },
      resetLoginFrom() {//重置登陆表单
        this.$refs.loginFormRef.resetFields();
      },
    }
  }
</script>

<style scoped>
  #login {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-image: url("../assets/loginbgimg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
    color: #fff;
    text-align: center;
  }

  .iotSys_name {
    display: inline-block;
    margin-top: 100px;
    font-size: 50px;
    letter-spacing: 50px;
    margin-left: 50px;
  }

  .login_input {
    width: 360px;
    height: 240px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
  }

  .login_input_userName, .login_input_password {
    border: none;
    color: #fff;
    background-color: transparent;
    font-size: 12px;
  }

  .submitBtn {
    /*background-color: transparent;*/
    /*color: #39f;*/
    font-size: 18px;
    width: 100px;
  }
</style>
