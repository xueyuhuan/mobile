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
      name:"2006983633",
      password:"12345678"
    }
  },
  methods:{
    login:function () {
      let self = this;
      this.$ajax.get('/login.json')
      // this.$ajax.post('http://192.168.0.19:8080/security_portal/login',{username:self.name,password:self.password},{
      //   headers: {
      //     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
      //   }
      // })
          .then(function (response) {
            console.log(response.data);
            //let data=response.data;
            self.$store.commit("set_token",response.data.token);
            self.$router.push('/');
          })
          .catch(function (response) {
            console.log(response);
          });
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