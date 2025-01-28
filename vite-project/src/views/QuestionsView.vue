<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <QuestionsContent />
        </div>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import QuestionsContent from '../components/QuestionsContent.vue'

</script>

<style scoped>
/* Add any additional styles here */
</style>