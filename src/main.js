import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {getRequest,postRequest,putRequest,deleteRequest,postKeyValueRequest} from "./network/request";

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.getRequest=getRequest
Vue.prototype.postRequest=postRequest
Vue.prototype.putRequest=putRequest
Vue.prototype.deleteRequest=deleteRequest
Vue.prototype.postKeyValueRequest=postKeyValueRequest

router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        if(store.state.user.username){
            next()
        }else {
            next({
                path:'login',
                query:{redirect:to.fullPath}
            })
        }
    }else {
        next()
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
