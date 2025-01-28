<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/questions">Questions</RouterLink>
      <RouterLink to="/questions/ask">Ask a question</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
