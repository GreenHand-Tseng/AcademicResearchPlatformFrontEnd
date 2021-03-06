// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://192.168.40.31:8080/'
Vue.prototype.$axios = axios
Vue.config.productionTip = false


router.beforeEach((to, from, next) =>{
  if(to.meta.requireAuth) {
    if(store.state.user.username ) {
      next()
    }else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
