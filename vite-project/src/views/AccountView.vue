<template>
    <div class="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div class="flex-1 flex flex-col">
            <Header />
            <AccountContent />
        </div>
    </div>
</template>

<script setup>

import AccountContent from '../components/AccountContent.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

</script>