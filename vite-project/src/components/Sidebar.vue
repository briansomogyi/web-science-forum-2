<template>
    <aside class="bg-gray-100 w-64 p-4">
        <ul class="space-y-4">
            <li>
                <RouterLink to="/" class="flex items-center space-x-2"><i class="bi bi-house"></i><span>Home</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/questions" class="flex items-center space-x-2"><i
                        class="bi bi-question-circle"></i><span>Questions</span></RouterLink>
            </li>
            <li>
                <RouterLink to="/questions/tagged" class="flex items-center space-x-2"><i
                        class="bi bi-tags"></i><span>Tags</span></RouterLink>
            </li>
            <li>
                <RouterLink to="/users/saves" class="flex items-center space-x-2"><i
                        class="bi bi-bookmark"></i><span>Saves</span></RouterLink>
            </li>
            <li>
                <RouterLink to="/users" class="flex items-center space-x-2"><i
                        class="bi bi-people"></i><span>Users</span></RouterLink>
            </li>
            <li>
                <RouterLink to="/companies" class="flex items-center space-x-2"><i
                        class="bi bi-building"></i><span>Companies</span></RouterLink>
            </li>
            <li>
                <RouterLink to="/discussions" class="flex items-center space-x-2"><i
                        class="bi bi-chat-dots"></i><span>Discussions</span></RouterLink>
            </li>
            <li>
                <RouterLink to="/collectives" class="flex items-center space-x-2"><i
                        class="bi bi-collection"></i><span>Collectives</span></RouterLink>
            </li>
        </ul>
    </aside>
</template>

<script setup>
</script>