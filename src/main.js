import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as filters from './filters'
//import * as xxx from 'xxx'  会将 "xxx" 中所有 export 导出的内容组合成一个对象返回(或import * as obj from 'xx'  这种写法是把所有的输出包裹到obj对象里);
//import xxx from ‘xxx’：（export default Din）只会导出这个默认的对象作为一个对象
Object.keys(filters).forEach(key=>{
    //Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
    // var obj = { 0: 'a', 1: 'b', 2: 'c' };
    // console.log(Object.keys(obj)); // console: ['0', '1', '2']
    // console.log(key);
    // console.log(filters[key]);
    Vue.filter(key,filters[key])
})
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