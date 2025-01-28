<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Tagged Questions</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="question in questions" :key="question.id" class="p-4 border rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-2">{{ question.title }}</h2>
                <p class="text-gray-600 mb-4">{{ question.description }}</p>
                <div class="flex items-center">
                    <i class="bi bi-tag-fill text-blue-500 mr-2"></i>
                    <span class="text-sm text-gray-500">{{ question.tag }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const questions = ref([
    { id: 1, title: 'How to use Vue.js 3 Composition API?', description: 'A brief description of the question.', tag: 'vuejs' },
    { id: 2, title: 'Responsive design with TailwindCSS', description: 'A brief description of the question.', tag: 'tailwindcss' },
    { id: 3, title: 'Using Bootstrap Icons in a Vue project', description: 'A brief description of the question.', tag: 'bootstrap' },
]);
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>