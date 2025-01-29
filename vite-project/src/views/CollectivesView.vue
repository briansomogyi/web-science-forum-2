<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <Collectives />
        </div>
    </div>
</template>

<script setup>

import Collectives from '../components/Collectives.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

</script>