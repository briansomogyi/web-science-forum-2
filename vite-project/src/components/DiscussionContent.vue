<template>
    <main class="container mx-auto px-4 py-6 flex">
        <section class="w-2/4">
            <DiscussionList />
        </section>
        <aside class="w-1/4">
            <DiscussionGuidelines />
        </aside>
    </main>
</template>

<script setup>
import DiscussionGuidelines from './DiscussionGuidelines.vue';
import DiscussionList from './DiscussionList.vue';
</script>