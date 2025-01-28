<template>
    <div class="min-h-screen bg-gray-100">
        <header class="bg-white shadow">
            <div class="container mx-auto px-4 py-6 flex justify-between items-center">
                <div class="flex items-center">
                    <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.png"
                        alt="Stack Overflow" class="h-8">
                    <nav class="ml-6">
                        <a href="#" class="text-gray-700 hover:text-gray-900 mx-2">Products</a>
                        <a href="#" class="text-gray-700 hover:text-gray-900 mx-2">OverflowAI</a>
                    </nav>
                </div>
                <div class="flex items-center">
                    <input type="text" placeholder="Search..." class="border rounded px-4 py-2">
                    <i class="bi bi-search ml-2"></i>
                </div>
            </div>
        </header>
        <main class="container mx-auto px-4 py-6 flex">
            <aside class="w-1/4">
                <nav class="bg-white shadow rounded p-4">
                    <ul>
                        <li><a href="#" class="block py-2 text-gray-700 hover:text-gray-900">Home</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 hover:text-gray-900">Questions</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 hover:text-gray-900">Tags</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 hover:text-gray-900">Saves</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 hover:text-gray-900">Users</a></li>
                        <li><a href="#" class="block py-2 text-gray-700 hover:text-gray-900">Companies</a></li>
                    </ul>
                </nav>
            </aside>
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
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Add any additional styles here */
</style>