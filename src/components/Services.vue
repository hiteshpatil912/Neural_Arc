<template>
  <section class="relative py-32 px-6 overflow-hidden" :id="id">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6 animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Our Services
        </div>

        <h2 class="text-4xl md:text-6xl font-black text-white leading-tight mb-6 animate-fade-in" style="animation-delay: 0.2s;">
          Digitally Crafted
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Solutions</span>
        </h2>

        <p class="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed animate-fade-in" style="animation-delay: 0.4s;">
          We deliver cutting-edge IT solutions that transform businesses, enhance productivity, and drive innovation in the digital age.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="service.title" class="animate-fade-in" :style="{ animationDelay: `${0.6 + index * 0.1}s` }">
          <ServiceCard
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :features="service.features"
          />
        </div>
      </div>

      <!-- Call to action -->
      <div class="text-center mt-16 animate-fade-in" style="animation-delay: 1.2s;">
        <router-link
          to="/services"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
        >
          View All Services
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from './ServiceCard.vue'

defineProps({
  id: String
})

const services = ref([
  {
    icon: "design_services",
    title: "Web Development",
    description: "Custom web applications built with modern technologies, ensuring scalability, performance, and exceptional user experiences.",
    features: "React/Vue.js;Node.js;Cloud Integration"
  },
  {
    icon: "smartphone",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices and platforms.",
    features: "iOS/Android;React Native;Flutter"
  },
  {
    icon: "cloud",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
    features: "AWS/Azure;DevOps;Microservices"
  },
  {
    icon: "security",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    features: "Risk Assessment;Penetration Testing;Compliance"
  },
  {
    icon: "analytics",
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics, BI solutions, and machine learning.",
    features: "Business Intelligence;ML/AI;Data Visualization"
  },
  {
    icon: "support_agent",
    title: "IT Consulting",
    description: "Strategic IT consulting to help you navigate digital transformation and achieve your business objectives.",
    features: "Digital Strategy;System Architecture;Process Optimization"
  }
])
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}
</style>