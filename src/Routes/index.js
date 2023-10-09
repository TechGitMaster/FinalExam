import { createRouter, createWebHistory } from "vue-router";
import LoadingInverted from '../Pages/LoadingInverted/index.vue';
import Login from '../Pages/Login/index.vue';
import Home from '../Pages/Home/index.vue';
import LoyaltyPoints from '../Pages/LoyaltyPoints/index.vue';
import ProductPage from '../Pages/ProductPage/index.vue';
import ViewProductPage from '../Pages/ViewProductPage/index.vue';
import OrderSummaryPage from '../Pages/OrderSummaryPage/index.vue';
import OrderReceivedPage from '../Pages/OrderReceivedPage/index.vue';
import ComingSoon from '../Pages/ComingSoon/index.vue';

const routes = [
    {
        path: '/',
        name: 'LoadingInverted',
        component: LoadingInverted
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/loyaltyPoints',
        name: 'LoyaltyPoints',
        component: LoyaltyPoints
    },
    {
        path: '/productPage',
        name: 'ProductPage',
        component: ProductPage
    },
    {
        path: '/viewProductPage',
        name: 'ViewProductPage',
        component: ViewProductPage
    },
    {
        path: '/orderSummaryPage',
        name: 'OrderSummaryPage',
        component: OrderSummaryPage
    },
    {
        path: '/orderReceivedPage',
        name: 'OrderReceivedPage',
        component: OrderReceivedPage
    },
    {
        path: '/commingSoonPage',
        name: 'CommingSoonPage',
        component: ComingSoon
    },
]


const Route = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default Route;
