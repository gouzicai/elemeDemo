import VueRouter from 'vue-router'
import Ele from './components/Ele.vue'
import Supermarket from './components/Supermarket.vue'
import Order from './components/Order.vue'
import Mine from './components/Mine.vue'




var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/ele'},
        {path:'/ele',component:Ele},
        {path:'/supermarket',component:Supermarket},
        {path:'/order',component:Order},
        {path:'/mine',component:Mine},
    ]
})

export default router