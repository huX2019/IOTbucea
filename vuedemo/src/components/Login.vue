<template>
  <div class="login">
    <div class="mylogin" align="center">
      <h4>登录</h4>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
        <el-form-item label="" prop="account" style="margin-top:10px;">
          <el-row>
            <el-col :span='2'>
              <span class="el-icon-s-custom"></span>
            </el-col>
            <el-col :span='22'>
              <el-input class="inps" placeholder='账号' v-model="loginForm.account">
              </el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="" prop="passWord">
          <el-row>
            <el-col :span='2'>
              <span class="el-icon-lock"></span>
            </el-col>
            <el-col :span='22'>
              <el-input class="inps" type="password" placeholder='密码' v-model="loginForm.passWord"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="margin-top:55px;">
          <!--<el-button type="primary" round class="submitBtn" @click="submitForm">登录</el-button>-->
          <router-link :to="{path:'/HomePage'}">
            <el-button type="primary" round class="submitBtn">登录</el-button>
          </router-link>
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
        loginForm: {
          account: '',
          passWord: ''
        },
        loginRules: {
          account: [
            {required: true, message: "请输入账号", trigger: "blur"}
          ],
          passWord: [{required: true, message: "请输入密码", trigger: "blur"}]
        }
      }
    },
    mounted: function () {

    },
    methods: {
      submitForm() {
        let self = this;
        const userAccount = this.loginForm.account;
        const userPassword = this.loginForm.passWord;
        const userForm = new FormData();
        userForm.append('userAccount', userAccount);
        userForm.append('userPassword', userPassword);
        this.axios.post('URL1', userForm
        ).then((res) => {
          if (res.data == 0) {
            self.$message({
              type: 'error',
              message: '密码错误，登陆失败！'
            })
          }
          //token
          self.sessiontoken = res.headers['sessiontoken'];
          self.PageToken = Math.random().toString(36).substr(2);
          sessionStorage.setItem('PageToken', self.PageToken);
          self.changeLogin({sessiontoken: self.sessiontoken});
          //登录成功
          if (res.data == 1) {
            self.axios.get("URL2"
            ).then((res) => {
              if (res.data == null) {
                self.$message({
                  type: 'error',
                  message: '查询失败！'
                })
              } else {
                if (res.data.userType == 0) {
                  self.$router.push({path: '/supermana', replace: true})
                } else if (res.data.userType == 1) {
                  self.$router.push({path: '/manauser', replace: true})
                } else if (res.data.userType == 2) {
                  self.$router.push({path: '/ordinauser', replace: true})
                }
              }
            }).catch((error) => {
              console.log(error)
            })
          }
        })
      },
  }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-image:url("../assets/loginbgimg.jpg") ;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: auto;
    color: #fff;
  }

  .mylogin {
    width: 360px;
    height: 300px;
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

  .inps input {
    border: none;
    color: #fff;
    background-color: transparent;
    font-size: 12px;
  }

  .submitBtn {
    background-color: transparent;
    color: #39f;
    width: 200px;
  }
</style>
