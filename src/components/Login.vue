<template>
  <div>
    username:<input type="text" v-model="loginForm.username" placeholder="">
    <br><br>
    password:<input type="password" v-model="loginForm.password" placeholder="">
    <br><br>
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm:{
        username:'',
        password:''
      },
      responseResult:[]
    }
  },
  methods: {
    login() {
      const _this = this
      console.log(this.$store.state)
      console.log(this.loginForm.username)
      console.log(this.loginForm.password)
      this.$axios
        .post('/login',this.loginForm)
        .then(successResponse => {
          console.log(successResponse)
          if(successResponse.status === 200){
            console.log(successResponse.data.code)
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
            // this.$router.replace({path:'/index'})
          }
        })
        .catch(failResponse => {
              console.log('aaaaaaaa')
        })
    }
  }
}
</script>

<style scoped>

</style>
