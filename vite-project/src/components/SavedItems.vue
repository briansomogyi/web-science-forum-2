<template>
    <div class="container mx-auto p-4">
        <div class="flex flex-col items-center">
            <div class="flex items-center space-x-4">
                <img src="../assets/vue.svg" alt="Profile" class="rounded-full">
                <div>
                    <h1 class="text-2xl font-bold">Brian Somogyi</h1>
                    <p class="text-sm text-gray-500">Member for 2 months | Last seen this week | Visited 31 days, 6
                        consecutive</p>
                </div>
            </div>
            <div class="mt-4 w-full">
                <div class="flex justify-between items-center">
                    <h2 class="text-xl font-semibold">All saves</h2>
                    <button class="btn btn-primary">
                        <i class="bi bi-plus-lg"></i> Create new list
                    </button>
                </div>
                <div class="mt-4 text-center">
                    <p class="text-gray-500">0 saved items</p>
                    <div class="flex justify-center mt-2">
                        <i class="bi bi-card-list text-4xl text-gray-300"></i>
                    </div>
                    <p class="text-gray-500 mt-2">You have no saved items</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>