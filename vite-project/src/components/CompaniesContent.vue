<template>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Companies</h1>
        <p class="mb-4">Learn about what it’s like to work at companies</p>
        <input type="text" placeholder="Search all companies" class="border p-2 mb-4 w-full" />
        <input type="text" placeholder="Search company by location" class="border p-2 mb-4 w-full" />
        <p class="mb-4">54 companies</p>
        <div v-for="company in companies" :key="company.name" class="border p-4 mb-4">
            <h2 class="text-2xl font-bold">{{ company.name }}</h2>
            <p class="text-gray-600">{{ company.locations.join('; ') }}</p>
            <p class="text-gray-600">{{ company.industries.join(', ') }}</p>
            <p class="mb-4">{{ company.description }}</p>
            <div class="flex space-x-2">
                <span v-for="tag in company.tags" :key="tag" class="bg-gray-200 px-2 py-1 rounded">{{ tag }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const companies = ref([
    {
        name: 'Audible',
        locations: ['Berlin', 'London', 'Cambridge'],
        industries: ['Agile Software Development', 'Content Marketing', 'Web Technology'],
        description: 'Imagine Your Possibilities at Audible. This is a place of invention and inspiration. For more than 25 years, we have been a leading creator and provider of some of the world’s best-loved audio storytelling, constantly revolutionizing the way people discover, access, and share stories. We’re also passionate Audible listeners, s...',
        tags: ['java', 'git', 'jquery']
    },
    {
        name: 'Intuit',
        locations: ['Paris', 'London', 'Petah Tikva'],
        industries: ['Computer Software', 'Financial Technology'],
        description: 'Intuit is the global technology platform that powers prosperity for the people and communities we serve with TurboTax, Credit Karma, QuickBooks, and Mailchimp. Our teams innovate using a common architecture shared across all of our products to unlock powerful insights and deliver personalized customer experiences....',
        tags: ['java', 'kotlin', 'scala']
    },
    {
        name: 'Thermo Fisher Scientific Careers',
        locations: ['Budapest', 'Brno', 'Hyderabad'],
        industries: ['Biotechnology', 'Pharmaceuticals', 'Science'],
        description: 'As the world leader in serving science, we solve the world’s toughest problems, like giving cancer patients hope, ensuring water and food are safe, helping law enforcement solve cases through forensics and most recently, serving as the largest provider of COVID-19 solutions. Our global team of more than 100,000...',
        tags: ['javascript', 'sql', 'python']
    }
]);
</script>

<style>
/* Add any additional custom styles here */
</style>