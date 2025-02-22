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
        },
        {
            path: '/discussions',
            name: 'discussions',
            component: () => import('../views/DiscussionView.vue')
        },
        {
            path: '/users/saves',
            name: 'saves',
            component: () => import('../views/SavedItemsView.vue')
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('../views/UsersView.vue')
        },
        {
            path: '/companies',
            name: 'companies',
            component: () => import('../views/CompaniesView.vue')
        },
        {
            path: '/users/brian-somogyi',
            name: '/my-account',
            component: () => import('../views/AccountView.vue')
        },
        {
            path: '/help',
            name: 'help',
            component: () => import('../views/HelpCenterView.vue')
        }
    ]
})
export default router