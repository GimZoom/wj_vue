import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login')
const Home = () => import('../views/Home')
const Index = () => import('../views/Index')
const LibraryIndex = () => import('../views/library/LibraryIndex')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'Index',
                component: Index,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/library',
                name: 'LibraryIndex',
                component: LibraryIndex,
                meta: {
                    requireAuth: true
                }
            }
        ]

    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
