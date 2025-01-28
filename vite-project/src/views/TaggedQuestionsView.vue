<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <TaggedQuestionsContent />
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import TaggedQuestionsContent from '../components/TaggedQuestionsContent.vue';
</script>