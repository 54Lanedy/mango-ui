// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import api from './http/index'
import i18n from './i18n'
import global from '@/utils/global'
//使用vuex做全局loading
import store from './store'

//注册使用
Vue.use(ElementUI);
Vue.use(api);

// 挂载全局配置模块
Vue.prototype.global = global;
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
});
