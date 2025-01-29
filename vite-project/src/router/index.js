import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/questions',
            name: 'questions',
            component: () => import('../views/QuestionsView.vue')
        },
        {
            path: '/questions/ask',
            name: 'ask-question',
            component: () => import('../views/AskQuestionView.vue')
        },
        {
            path: '/questions/tagged',
            name: 'tagged-questions',
            component: () => import('../views/TaggedQuestionsView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/collectives',
            name: 'collectives',
            component: () => import('../views/CollectivesView.vue')
        }
    ]
})
export default router