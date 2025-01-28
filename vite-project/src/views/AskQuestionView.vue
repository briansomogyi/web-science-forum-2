<template>
    <div class=" flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <AskQuestionContent />
        </div>
    </div>
</template>

<script setup>

import AskQuestionContent from '../components/AskQuestionContent.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

</script>

<style scoped>
/* Add any additional styles here */
</style>