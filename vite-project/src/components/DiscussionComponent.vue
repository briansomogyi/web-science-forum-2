<!-- Child Component (DiscussionComponent.vue) -->
<template>
    <div class="bg-white p-4 mb-4 shadow rounded">
        <h2 class="text-xl font-bold">{{ discussion.title }}</h2>
        <p class="text-gray-700">{{ discussion.content }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    discussion: {
        type: Object,
        required: true
    }
});
</script>

<style scoped></style>