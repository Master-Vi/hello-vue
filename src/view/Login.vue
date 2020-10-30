<template>
  <div>
    <el-card shadow="always" class="login-card">
      <h3 class="welcome-login">欢迎登录</h3>
      <el-form ref="form" :model="form" :label-position="loginLabel" label-width="80px" class="login-form"
               :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item class="login-button">
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginLabel: 'right',
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit(form) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
            sessionStorage.setItem("isLogin", 'true');
            // 保存在 Vuex Store 里面
            this.$store.dispatch('asyncUpdateUser', {username: this.form.username});
            this.$router.push({name: 'Main', params: {username: this.form.username}});
          } else {
            this.$message.error("登录失败");
          }
        });

      }
    }
  }
</script>

<style scoped>
  .login-card {
    width: 30%;
    margin: 10% auto;
  }

  .login-form {
    text-align: center;
  }

  .welcome-login {
    text-align: center;
  }
</style>
