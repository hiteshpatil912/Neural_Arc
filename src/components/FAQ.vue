<template>
  <section class="py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-black uppercase italic mb-16 text-center">Inquiry Terminal</h2>
      <div class="space-y-4">
        <FAQItem
          question="How does the 'Neural' design process work?"
          answer="We use bio-metric pattern recognition to analyze user intent before the interaction occurs, allowing us to build interfaces that feel intuitive on a subconscious level."
          open="true"
        />
        <FAQItem
          question="Can you integrate with existing legacy systems?"
          answer="Yes. Our Neural bridge technology allows for seamless data translation between archaic infrastructures and our modern algorithmic stacks."
        />
        <FAQItem
          question="What is the typical development timeline?"
          answer="Standard neural ecosystems typically require 8-12 weeks for full architecture, calibration, and deployment phases."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FAQItem from './FAQItem.vue'
</script>

<style scoped>
</style>