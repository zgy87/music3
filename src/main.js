import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import './assets/css/base.scss'
import VueLazyload from 'vue-lazyload'
import VConsole from 'vconsole'
import Loading from './plugin/loading/index'
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)
const vConsole = new VConsole()
// 注意点: 如果想通过use的方式来注册组件, 那么必须先将组件封装成插件
Vue.use(Loading, {
  title: '正在加载...'
})
Vue.use(vConsole)
Vue.use(VueLazyload, {
  loading: require('./assets/images/loading.png')
})
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
