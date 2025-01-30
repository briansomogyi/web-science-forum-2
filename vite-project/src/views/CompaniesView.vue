<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <CompaniesContent />
        </div>
    </div>
</template>

<script setup>

import CompaniesContent from '../components/CompaniesContent.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

</script>