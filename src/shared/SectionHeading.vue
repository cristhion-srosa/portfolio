<script setup lang="ts">
defineProps<{
  index: string;
  title: string;
  intro?: string;
}>();
</script>

<template>
  <header class="section-heading" data-reveal>
    <span class="section-heading__index" aria-hidden="true">{{ index }}</span>
    <div>
      <h2>{{ title }}</h2>
      <p v-if="intro">{{ intro }}</p>
    </div>
  </header>
</template>
