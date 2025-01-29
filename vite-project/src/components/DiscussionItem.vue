<template>
    <div class="bg-white p-4 mb-4 shadow rounded">
        <h2 class="text-xl font-bold">{{ props.discussion.title }}</h2>
        <p class="text-gray-700">{{ props.discussion.content }}</p>
    </div>
</template>

<script setup>
const props = defineProps('discussion');
</script>

<style scoped></style>