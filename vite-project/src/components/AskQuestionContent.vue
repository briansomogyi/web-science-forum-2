<template>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                <h1 class="text-2xl font-bold">Ask a question in Staging Ground</h1>
                <p class="mt-4">A private space to help new users write their first questions.</p>
                <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" @click="handleClick">Ask a
                    question</button>
                <div>{{ doubleCount }}</div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, computed, watch, defineEmits } from 'vue'

// Emits
const emit = defineEmits(['myEvent'])

const handleClick = () => {
    emit('myEvent', 'Hello from child')
}

// Computed
const count = ref(0)
const doubleCount = computed(() => count.value * 2)

// Watches
watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`)
})
</script>
