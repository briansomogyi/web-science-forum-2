<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div class="flex justify-center mb-4">
                <img src="../assets/vue.svg" alt="Stack Overflow Logo" class="h-12">
            </div>
            <button class="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center mb-4">
                <i class="bi bi-google mr-2"></i> Log in with Google
            </button>
            <button class="w-full bg-gray-800 text-white py-2 rounded-lg flex items-center justify-center mb-4">
                <i class="bi bi-github mr-2"></i> Log in with GitHub
            </button>
            <button class="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center mb-4">
                <i class="bi bi-facebook mr-2"></i> Log in with Facebook
            </button>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" v-model="email"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <a href="#" class="text-blue-500 text-sm float-right mt-1">Forgot password?</a>
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg">Log in</button>
            </form>
            <div class="text-center mt-4">
                <p>Don't have an account? <a href="#" class="text-blue-500">Sign up</a></p>
                <p>Are you an employer? <a href="#" class="text-blue-500">Sign up on Talent</a></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
    // Handle login logic here
};
</script>

<style></style>