<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <DiscussionContent />
        </div>
    </div>
</template>

<script setup>
import DiscussionContent from '../components/DiscussionContent.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
</script>