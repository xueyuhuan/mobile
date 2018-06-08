<template>
  <div class="login">
    <input v-model="name" type="text" placeholder="姓名"/>
    <input v-model="password" type="password" placeholder="密码"/>
    <button @click="login">登录</button>
  </div>
</template>

<script>

export default {
  name: "Login",
  data: function () {
    return {
      name: "2006983633",
      password: "12345678"
    }
  },
  methods: {
    login: function () {
      let self = this;
      // this.ajax.get('/login.json',"1");
      this.ajax.post('/security_portal/login', {username: self.name, password: self.password});
    }
  }
};
</script>

<style lang="less">
  .login{
    margin: 100px;
  }
  input[type='text']{
    width: 100%;
  }
</style>