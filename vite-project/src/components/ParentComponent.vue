<!-- Parent Component -->
<template>
    <DiscussionComponent :discussion="discussionData" />
</template>

<script setup>
import DiscussionComponent from './DiscussionComponent.vue';

const discussionData = {
    title: 'Discussion Title',
    content: 'This is the content of the discussion.'
};
</script>