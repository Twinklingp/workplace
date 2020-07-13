import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home"
import Login from "@/components/Login"
import index from "@/components/Index"


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/index',
            meta: {
                needLogin: true,
            },
            component: Home,
            children: [
                //首页
                {
                    path: '/index',
                    name: 'index',
                    component: index
                }
            ]
        }
    ]
})