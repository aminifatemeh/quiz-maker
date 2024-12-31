// router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import QuizPreview from '@/views/QuizPreview.vue';

Vue.use(Router);

const routes = [
    {
        path: '/quiz-preview',
        name: 'QuizPreview',
        component: QuizPreview,
        props: route => ({ quiz: route.params.quiz })
    },
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/DashboardPage.vue') // Example for your Dashboard route
    }
];

const router = new Router({
    mode: 'history',  // Enabling history mode
    routes
});

export default router;
