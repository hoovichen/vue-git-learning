import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/flex.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 标签随着路由改变而改变
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
