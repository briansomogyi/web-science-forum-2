<script setup>
import About from '../components/About.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
</script>
<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <About />
        </div>
    </div>
</template>
<style></style>