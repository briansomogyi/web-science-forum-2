<template>
    <div class="p-4">
        <DiscussionItem v-for="discussion in discussions" :key="discussion.title" :discussion="discussion" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DiscussionItem from './DiscussionItem.vue';

const discussions = ref([]);

onMounted(() => {
    discussions.value.push(
        {
            title: 'I completed a project, but I Still feel stuck - Is this normal?',
            content: 'Hey everyone, I\'ve been learning web development for about a month now, following Max\'s 100 Days of Code course on Udemy. So far, the journey has been exciting—I\'ve built small projects with HTML,'
        },
        {
            title: 'What do you think about Google Cloud Build?',
            content: 'Hey folks! I\'m into Google Cloud Platform for about a year. An interesting fact about their CI/CD platform is that each step of the build is performed by running a particular docker image (a.k.a. ...'
        },
        {
            title: 'Does the use of AI to overcome obstacles in code benefit the user long-term?',
            content: 'I\'m currently enrolled in a relatively beginner programming class that teaches python and has us complete various coding challenges each day. I am genuinely interested and want to keep learning, but ...'
        }
    );
});
</script>

<style scoped></style>
