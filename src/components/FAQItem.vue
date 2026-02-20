<template>
  <details class="group glass rounded-xl border-white/5 overflow-hidden" :open="open">
    <summary class="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-all">
      <span class="font-bold uppercase tracking-widest text-sm">{{ question }}</span>
      <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180">expand_more</span>
    </summary>
    <div class="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
      {{ answer }}
    </div>
  </details>
</template>

<script setup>
defineProps({
  question: String,
  answer: String,
  open: Boolean
})
</script>

<style scoped>
</style>