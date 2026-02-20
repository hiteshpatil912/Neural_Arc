<template>
  <nav
    class="navbar fixed top-0 w-full z-50 transition-all duration-300"
    :class="{ 'bg-black/80 backdrop-blur-md shadow-lg': isScrolled && theme === 'dark', 'bg-white/80 backdrop-blur-md shadow-lg': isScrolled && theme === 'light' }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img
              src="https://cdn-ajfbh.nitrocdn.com/gyBtzLXgwvniiNwRwtysBLzNCLjNRxyK/assets/images/optimized/rev-ba4a1a3/dwebpixel.com/wp-content/uploads/2020/08/DWebPixel-White-Logo-300px.png"
              alt="DWEBPIXEL Logo"
              class="h-8 w-auto transition-all duration-300 hover:scale-105"
              :class="theme === 'light' ? 'filter brightness-0' : ''"
            >
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              class="relative px-3 py-2 text-sm font-medium transition-colors duration-300 group"
              :class="[
                $route.path === item.path
                  ? 'text-primary'
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
              ]"
            >
              {{ item.name }}
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                :class="{ 'w-full': $route.path === item.path }"
              ></span>
            </router-link>
          </div>
        </div>

        <!-- Theme Toggle & Mobile menu button -->
        <div class="flex items-center gap-4">
          <!-- Theme Toggle Button -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg
              v-if="theme === 'dark'"
              class="w-5 h-5 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors duration-300"
              :class="theme === 'dark'
                ? 'text-gray-400 hover:text-white hover:bg-gray-700 focus:ring-white'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:ring-gray-500'"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                class="hidden h-6 w-6"
                :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden transition-all duration-300 ease-in-out"
      :class="{ 'max-h-0 opacity-0': !mobileMenuOpen, 'max-h-64 opacity-100': mobileMenuOpen }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md border-t transition-colors duration-300"
           :class="theme === 'dark' ? 'bg-black/95 border-gray-700' : 'bg-white/95 border-gray-300'">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          @click="closeMobileMenu"
          class="block px-3 py-2 text-base font-medium transition-colors duration-300"
          :class="[
            $route.path === item.path
              ? 'text-primary border-l-4 border-primary'
              : theme === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
          ]"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '../../composables/useTheme'

const route = useRoute()
const { theme, toggleTheme } = useTheme()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Additional styles if needed */
</style>