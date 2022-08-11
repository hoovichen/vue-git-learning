import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/flex.css'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)
Vue.use(ElementUI);
Vue.config.productionTip = false

// to 即将进入的路由
// from 即将离开的路由
// next 继续往下执行
router.beforeEach((to, from, next) => {
  // 设置tabs数据
  store.commit('getTabs');
  store.commit('setActiveTabs', to.name);
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
