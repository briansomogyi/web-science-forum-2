<template>
    <main class="container mx-auto px-4 py-6 flex">
        <section class="w-2/4">
            <div class="bg-white shadow rounded p-4">
                <h2 class="text-xl font-bold mb-4">Newest Questions</h2>
                <ul>
                    <li class="border-b py-4">
                        <div class="flex justify-between">
                            <div>
                                <h3 class="text-lg font-semibold">Playwright routes on different pages interfering
                                    with each other?</h3>
                                <p class="text-gray-600">Hey all :) Playwright question ahead :) Pretty sure this is
                                    somehow my fault as I assume that others would have had the same issue before me
                                    :D I have an application which has top-level projects - in ...</p>
                                <div class="flex items-center mt-2">
                                    <span class="text-gray-500">asked 2 mins ago</span>
                                    <span class="text-gray-500 ml-4">0 votes</span>
                                    <span class="text-gray-500 ml-4">0 answers</span>
                                    <span class="text-gray-500 ml-4">1 view</span>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <i class="bi bi-bookmark ml-2"></i>
                            </div>
                        </div>
                    </li>
                    <!-- Repeat similar structure for other questions -->
                </ul>
            </div>
        </section>
        <aside class="w-1/4">
            <div class="bg-white shadow rounded p-4">
                <h2 class="text-xl font-bold mb-4">The Overflow Blog</h2>
                <ul>
                    <li class="border-b py-4">
                        <h3 class="text-lg font-semibold">How the internet changed in 2024</h3>
                        <p class="text-gray-600">The internet has undergone significant changes in 2024, with new
                            technologies and trends emerging...</p>
                    </li>
                    <!-- Repeat similar structure for other blog posts -->
                </ul>
            </div>
        </aside>
    </main>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from 'vue';

const emits = defineEmits(['update']);

const newestQuestions = ref([
    {
        title: 'Playwright routes on different pages interfering with each other?',
        description: 'Hey all :) Playwright question ahead :) Pretty sure this is somehow my fault as I assume that others would have had the same issue before me :D I have an application which has top-level projects - in ...',
        asked: '2 mins ago',
        votes: 0,
        answers: 0,
        views: 1
    },
    // Add more questions here
]);

const filteredQuestions = computed(() => {
    return newestQuestions.value.filter(question => question.votes > 0);
});

watch(newestQuestions, (newVal, oldVal) => {
    console.log('Questions updated:', newVal);
    emits('update', newVal);
});

</script>
