<template>
    <div class="container mx-auto p-4">
        <div class="flex">
            <main class="w-3/4 p-4">
                <div class="mb-4">
                    <input type="text" placeholder="Filter by user" class="border p-2 w-full" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="user in users" :key="user.id" class="p-4 border rounded">
                        <div class="flex items-center">
                            <img :src="user.avatar" alt="Avatar" class="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h3 class="text-lg font-bold">{{ user.name }}</h3>
                                <p class="text-sm">{{ user.location }}</p>
                                <p class="text-sm">{{ user.reputation }}</p>
                                <p class="text-sm">{{ user.expertise.join(', ') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const users = ref([
    {
        id: 1,
        name: 'VonC',
        location: 'France',
        reputation: 695,
        expertise: ['git', 'github', 'docker'],
        avatar: './vite.svg'
    },
    {
        id: 2,
        name: 'Jon Skeet',
        location: 'Reading, United Kingdom',
        reputation: 635,
        expertise: ['C#', '.net', 'java'],
        avatar: './vite.svg'
    },
    // Add more users as needed
]);
</script>