<template>
  <footer class="relative py-16 px-6 border-t border-white/5 bg-gradient-to-b from-gray-900/50 to-black overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Company info -->
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span class="text-2xl font-bold text-white">DWEBPIXEL</span>
          </div>

          <p class="text-gray-400 text-lg leading-relaxed max-w-md">
            Crafting digital excellence through innovative IT solutions, web development, and cutting-edge technology services.
          </p>

          <!-- Social media icons -->
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="group w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-br hover:from-primary hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              :aria-label="social.name"
            >
              <component :is="social.icon" class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-white">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link
                :to="link.path"
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-white">Services</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service.name">
              <router-link
                :to="service.path"
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
              >
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {{ service.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter signup -->
      <div class="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 mb-12 border border-white/10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p class="text-gray-400">Subscribe to our newsletter for the latest updates and insights.</p>
          </div>
          <div class="flex gap-4">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
            >
            <button
              @click="subscribeNewsletter"
              class="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
        <div class="text-gray-400 text-sm">
          © {{ currentYear }} DWEBPIXEL. All rights reserved.
        </div>

        <div class="flex gap-8 text-sm">
          <router-link to="/privacy" class="text-gray-400 hover:text-primary transition-colors duration-300">
            Privacy Policy
          </router-link>
          <router-link to="/terms" class="text-gray-400 hover:text-primary transition-colors duration-300">
            Terms of Service
          </router-link>
          <router-link to="/cookies" class="text-gray-400 hover:text-primary transition-colors duration-300">
            Cookie Policy
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

// Social media icons components
const TwitterIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  `
}

const LinkedInIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  `
}

const GitHubIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `
}

const email = ref('')
const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/dwebpixel', icon: TwitterIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/dwebpixel', icon: LinkedInIcon },
  { name: 'GitHub', url: 'https://github.com/dwebpixel', icon: GitHubIcon }
]

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const services = [
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'Mobile Apps', path: '/services/mobile-apps' },
  { name: 'Cloud Solutions', path: '/services/cloud' },
  { name: 'UI/UX Design', path: '/services/design' },
  { name: 'Consulting', path: '/services/consulting' }
]

const subscribeNewsletter = () => {
  if (email.value) {
    // Here you would typically send the email to your backend
    alert(`Thank you for subscribing! We'll send updates to ${email.value}`)
    email.value = ''
  } else {
    alert('Please enter a valid email address')
  }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>