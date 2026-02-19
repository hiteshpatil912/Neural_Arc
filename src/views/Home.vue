<template>
  <div class="scroll-smooth">
    <!-- Background Elements -->
    <div class="fixed inset-0 holographic-grid pointer-events-none"></div>
    <div class="floating-blob bg-primary w-96 h-96 top-[-10%] left-[-5%] rounded-full"></div>
    <div class="floating-blob bg-blue-600 w-[500px] h-[500px] bottom-[-10%] right-[-5%] rounded-full"></div>
    <div class="floating-blob bg-purple-600 w-80 h-80 top-[40%] right-[10%] rounded-full"></div>

    <!-- AI Circuit Animations -->
    <div class="ai-circuit top-[20%] left-[10%]"></div>
    <div class="ai-circuit top-[60%] right-[15%] animation-delay-1000"></div>
    <div class="ai-circuit bottom-[30%] left-[20%] animation-delay-2000"></div>
    <div class="ai-particle top-[10%] left-[5%] animation-delay-500"></div>
    <div class="ai-particle top-[50%] right-[10%] animation-delay-1500"></div>
    <div class="ai-particle bottom-[20%] left-[30%] animation-delay-2500"></div>

    <Navbar />
    <HeroSection />
    <TrustTicker />
    <Services id="services" />
    <About id="about" />
    <Portfolio id="portfolio" />
    <Pricing id="pricing" />
    <FAQ />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import TrustTicker from '../components/TrustTicker.vue'
import Services from '../components/Services.vue'
import About from '../components/About.vue'
import Portfolio from '../components/Portfolio.vue'
import Pricing from '../components/Pricing.vue'
import FAQ from '../components/FAQ.vue'
import Contact from '../components/Contact.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
/* Additional styles if needed */
</style>