<template>
  <section class="py-32 px-6" :id="id">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-24 space-y-4">
        <h4 class="text-primary font-bold uppercase tracking-[0.3em] text-xs">Investment</h4>
        <h2 class="text-6xl font-black uppercase italic">Access Tiers</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingTier
          level="01"
          name="CORE"
          price="$5k"
          suffix="/project"
          features="Neural UI Design;React/Tailwind Dev;Basic AI Integration"
          recommended="false"
        />
        <PricingTier
          level="02"
          name="ADVANCED"
          price="$15k"
          suffix="/project"
          features="Full Neural Ecosystem;Custom LLM Training;Spatial Design (3D);Priority Support"
          recommended="true"
        />
        <PricingTier
          level="03"
          name="ENTERPRISE"
          price="Custom"
          suffix=""
          features="On-Premise Deployment;Quantum-Secure Layer;Dedicated Engineering Team"
          recommended="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PricingTier from './PricingTier.vue'

defineProps({
  id: String
})
</script>

<style scoped>
</style>