<template>
  <div class="group relative glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer overflow-hidden">
    <!-- Animated background glow -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

    <!-- Floating particles effect -->
    <div class="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
    <div class="absolute bottom-6 left-6 w-1 h-1 bg-purple-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style="animation-delay: 0.5s;"></div>

    <div class="relative z-10">
      <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:glow-primary">
        <span class="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-300">{{ icon }}</span>
      </div>

      <h3 class="text-2xl font-bold mb-4 uppercase tracking-tight group-hover:text-primary transition-colors duration-300">{{ title }}</h3>

      <p class="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-300">
        {{ description }}
      </p>

      <ul class="space-y-3 text-xs uppercase tracking-widest text-slate-500 font-bold">
        <li v-for="feature in featuresList" :key="feature" class="flex items-center gap-3 group-hover:text-slate-400 transition-colors duration-300">
          <span class="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></span>
          <span class="group-hover:translate-x-1 transition-transform duration-300">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- Hover border animation -->
    <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500 group-hover:animate-pulse"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
  features: String
})

const featuresList = computed(() => props.features.split(';'))
</script>

<style scoped>
.glow-primary {
  box-shadow: 0 0 20px rgba(236, 91, 19, 0.4);
}
</style>