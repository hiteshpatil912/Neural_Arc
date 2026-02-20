<template>
  <div :class="size" class="relative overflow-hidden rounded-2xl group">
    <img :alt="title + ' image'" :src="image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12">
      <h3 class="text-3xl font-black uppercase">{{ title }}</h3>
      <p class="text-slate-300 mb-6">{{ description }}</p>
      <span class="text-xs uppercase font-bold tracking-widest text-primary">Case Study →</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  size: String,
  image: String,
  title: String,
  description: String
})
</script>

<style scoped>
</style>