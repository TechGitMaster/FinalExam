import { createRouter, createWebHistory } from "vue-router";
import Main from '../Pages/main.vue';
import Login from '../Pages/Login/index.vue';
import Home from '../Pages/Home/index.vue';
import LoyaltyPoints from '../Pages/LoyaltyPoints/index.vue';
import ProductPage from '../Pages/ProductPage/index.vue';
import ViewProductPage from '../Pages/ViewProductPage/index.vue';
import OrderSummaryPage from '../Pages/OrderSummaryPage/index.vue';
import OrderReceivedPage from '../Pages/OrderReceivedPage/index.vue';
import ComingSoon from '../Pages/ComingSoon/index.vue';
import MyCart from '../Pages/MyCart/index.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'loyalty-points',
                name: 'LoyaltyPoints',
                component: LoyaltyPoints
            },
            {
                path: 'product-page',
                name: 'ProductPage',
                component: ProductPage
            },
            {
                path: 'view-product-page/:id',
                name: 'ViewProductPage',
                component: ViewProductPage
            },
            {
                path: 'order-summary-page',
                name: 'OrderSummaryPage',
                component: OrderSummaryPage
            },
            {
                path: 'order-received-page',
                name: 'OrderReceivedPage',
                component: OrderReceivedPage
            },
            {
                path: 'comming-soon-page',
                name: 'CommingSoonPage',
                component: ComingSoon
            },
            {
                path: 'my-cart',
                name: 'MyCart',
                component: MyCart
            },
        ]
    },
]


const Route = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default Route;
