<template>
    <main class="flex-1 p-4">
        <section class="mb-8">
            <h2 class="text-xl font-bold mb-4">Interesting Posts</h2>
            <div class="space-y-4">
                <article class="p-4 bg-white shadow rounded">
                    <h3 class="text-lg font-semibold">Post Title</h3>
                    <p class="text-gray-600">Brief description of the post...</p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-gray-500">Votes: 10</span>
                        <span class="text-gray-500">Answers: 5</span>
                        <span class="text-gray-500">Views: 100</span>
                    </div>
                </article>
                <!-- Repeat for more posts -->
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from 'vue'

// Emits
const emit = defineEmits(['postClicked'])

const handleClick = () => {
    emit('postClicked', 'Post was clicked!')
}

// Computed
const votes = ref(10)
const answers = ref(5)
const views = ref(100)

const totalInteractions = computed(() => votes.value + answers.value + views.value)

// Watch
watch(totalInteractions, (newValue, oldValue) => {
    console.log(`Total interactions changed from ${oldValue} to ${newValue}`)
})
</script>
