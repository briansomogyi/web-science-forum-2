<template>
    <div class="flex min-h-screen">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <MainContent />
        </div>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import MainContent from '../components/MainContent.vue'

</script>