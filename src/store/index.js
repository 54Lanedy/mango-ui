import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import app from './modules/app'
import tab from './modules/tab'
import user from './modules/user'
import menu from './modules/menu'
import iframe from './modules/iframe'

const store = new vuex.Store({
    modules: {
      app: app,
      user: user,
      menu: menu,
      iframe: iframe,
      tab: tab
    }
});

export default store
