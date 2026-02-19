<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
    <!-- Floating Background Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Main Heading -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up">
        <span class="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
          Digitally crafted solutions
        </span>
        <br />
        <span class="text-gray-300">for a smarter tomorrow.</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up" style="animation-delay: 0.2s;">
        We deliver cutting-edge IT solutions that transform businesses, enhance productivity, and drive innovation in the digital age.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up" style="animation-delay: 0.4s;">
        <router-link
          to="/contact"
          class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Get In Touch
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </router-link>

        <router-link
          to="/services"
          class="px-8 py-4 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 text-lg transition-all duration-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          View Services
        </router-link>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// Add fade-up animation keyframes via CSS
const fadeUpKeyframes = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-up {
    animation: fadeUp 0.8s ease-out forwards;
    opacity: 0;
  }
`

onMounted(() => {
  // Inject keyframes into the document head
  const style = document.createElement('style')
  style.textContent = fadeUpKeyframes
  document.head.appendChild(style)
})
</script>

<style scoped>
/* Additional custom styles if needed */
</style>