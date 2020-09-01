import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from '../components/dashboard/container'
import Contact from '../components/contact/container'
import Product from '../components/product/container'

const routes = [
    {
        component: Dashboard,
        name: 'dashboard',
        path: '/dashboard',
    },
    {
        component: Contact,
        name: 'contact',
        path: '/contact'
    },
    {
        component: Product,
        name: 'product',
        path: '/product'
    },
]

export default new VueRouter({
    routes //short for 'routes: routes'
})