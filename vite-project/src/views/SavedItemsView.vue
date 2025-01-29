<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <SavedItems />
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import SavedItems from '../components/SavedItems.vue';
import Header from '../components/Header.vue';
</script>