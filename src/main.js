import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "@/components/common/toast/index"
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(Toast)
Vue.use(VueLazyload,{
  loading:require('@/assets/img/zixing.jpg')
})
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
