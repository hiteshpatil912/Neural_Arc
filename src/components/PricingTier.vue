<template>
  <div class="glass p-10 rounded-2xl border-white/5 flex flex-col" :class="{ 'scale-105 glow-primary bg-primary/5': recommended }">
    <div v-if="recommended" class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-[0.2em]">Recommended</div>
    <div class="text-slate-500 uppercase font-black text-xs tracking-widest mb-2">Level {{ level }}</div>
    <h3 class="text-3xl font-bold mb-6">{{ name }}</h3>
    <div class="text-5xl font-black mb-8">{{ price }} <span class="text-lg font-normal text-slate-500 italic">{{ suffix }}</span></div>
    <div class="space-y-4 mb-12 flex-grow">
      <div v-for="feature in featuresList" :key="feature" class="flex items-center gap-3 text-sm" :class="recommended ? 'text-slate-100' : 'text-slate-300'">
        <span class="material-symbols-outlined text-primary">check_circle</span>
        {{ feature }}
      </div>
    </div>
    <button class="w-full py-4 border border-white/10 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all" :class="recommended ? 'bg-primary text-white hover:scale-[1.02]' : ''">
      {{ recommended ? 'Initiate Contract' : (level === '03' ? 'Contact Ops' : 'Request Access') }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: String,
  name: String,
  price: String,
  suffix: String,
  features: String,
  recommended: Boolean
})

const featuresList = computed(() => props.features.split(';'))
</script>

<style scoped>
</style>