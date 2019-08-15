import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


var vm = new Vue({
    el:'#app',
    render:c=>c(App),
    router
})