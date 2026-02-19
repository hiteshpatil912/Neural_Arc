<template>
  <section class="relative py-32 px-6 overflow-hidden" :id="id">
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 3s;"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left side - Content -->
        <div class="space-y-8 animate-fade-in">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            About DWEBPIXEL
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Crafting Digital
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Excellence</span>
            Since 2020
          </h2>

          <p class="text-slate-400 text-lg leading-relaxed">
            We are a premier IT solutions company specializing in web development, mobile applications, cloud services, and digital transformation. Our team of expert developers, designers, and strategists work together to deliver innovative solutions that drive business growth.
          </p>

          <div class="grid grid-cols-2 gap-8 py-8">
            <div class="text-center lg:text-left">
              <div class="text-4xl font-black text-primary mb-2">500+</div>
              <div class="text-sm uppercase font-bold tracking-widest text-slate-500">Projects Completed</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-4xl font-black text-primary mb-2">98%</div>
              <div class="text-sm uppercase font-bold tracking-widest text-slate-500">Client Satisfaction</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-4xl font-black text-primary mb-2">50+</div>
              <div class="text-sm uppercase font-bold tracking-widest text-slate-500">Team Members</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-4xl font-black text-primary mb-2">24/7</div>
              <div class="text-sm uppercase font-bold tracking-widest text-slate-500">Support</div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <router-link
              to="/about"
              class="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              Learn More About Us
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </router-link>

            <router-link
              to="/contact"
              class="inline-flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-600 rounded-lg font-semibold text-gray-300 transition-all duration-300 hover:border-gray-400 hover:text-white hover:bg-gray-800/50"
            >
              Get In Touch
            </router-link>
          </div>
        </div>

        <!-- Right side - Visual -->
        <div class="relative animate-fade-in" style="animation-delay: 0.3s;">
          <div class="relative">
            <!-- Main image container -->
            <div class="relative glass rounded-3xl overflow-hidden border border-white/10 group">
              <div class="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div class="text-center space-y-4">
                  <div class="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-primary/30">
                    <svg class="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div class="text-white font-bold text-xl">Innovation Hub</div>
                  <div class="text-gray-400 text-sm">Where Ideas Become Reality</div>
                </div>
              </div>

              <!-- Floating elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse" style="animation-delay: 2s;"></div>

              <!-- Stats overlay -->
              <div class="absolute bottom-6 left-6 right-6">
                <div class="glass rounded-xl p-4 border border-white/10">
                  <div class="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div class="text-2xl font-bold text-primary">2020</div>
                      <div class="text-xs text-gray-400 uppercase tracking-widest">Founded</div>
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-primary">6</div>
                      <div class="text-xs text-gray-400 uppercase tracking-widest">Years</div>
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-primary">∞</div>
                      <div class="text-xs text-gray-400 uppercase tracking-widest">Potential</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative elements around the main container -->
            <div class="absolute -top-8 -left-8 w-16 h-16 border-2 border-primary/30 rounded-full animate-spin" style="animation-duration: 20s;"></div>
            <div class="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg rotate-45 animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Bottom section with team highlights -->
      <div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style="animation-delay: 0.6s;">
        <div class="text-center glass p-6 rounded-2xl border border-white/10">
          <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/30">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Innovation</h3>
          <p class="text-gray-400 text-sm">Pushing boundaries with cutting-edge technologies and creative solutions.</p>
        </div>

        <div class="text-center glass p-6 rounded-2xl border border-white/10">
          <div class="w-16 h-16 mx-auto bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl flex items-center justify-center mb-4 border border-green-500/30">
            <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Collaboration</h3>
          <p class="text-gray-400 text-sm">Working closely with clients to understand their needs and deliver exceptional results.</p>
        </div>

        <div class="text-center glass p-6 rounded-2xl border border-white/10">
          <div class="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 border border-purple-500/30">
            <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Excellence</h3>
          <p class="text-gray-400 text-sm">Committed to delivering high-quality solutions that exceed expectations.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: String
})
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