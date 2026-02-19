<template>
  <section class="py-32 px-6 relative" :id="id">
    <div class="max-w-5xl mx-auto">
      <div class="glass p-12 md:p-20 rounded-3xl border-white/10 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div class="space-y-8">
            <h2 class="text-5xl font-black uppercase italic leading-none">Ready to <br/> <span class="text-primary">Evolve?</span></h2>
            <p class="text-slate-400 leading-relaxed">
              Establish a secure channel with our operations team to begin your digital metamorphosis.
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-4 group cursor-pointer">
                <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <span class="material-symbols-outlined text-primary">mail</span>
                </div>
                <span class="text-sm font-bold">ops@neuralarc.io</span>
              </div>
              <div class="flex items-center gap-4 group cursor-pointer">
                <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                </div>
                <span class="text-sm font-bold" data-location="Tokyo, Japan">Neo-Tokyo, Sector 7</span>
              </div>
            </div>
          </div>
          <form class="space-y-6">
            <div>
              <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Subject Name</label>
              <input class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="e.g. John Doe" type="text"/>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Secure Channel (Email)</label>
              <input class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="email@provider.com" type="email"/>
            </div>
            <div>
              <label class="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Project Brief</label>
              <textarea class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none" placeholder="Describe the vision..." rows="4"></textarea>
            </div>
            <button class="group w-full py-4 bg-primary text-white font-black uppercase tracking-[0.3em] rounded-lg glow-primary hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2" type="button">
              Execute Initialization
              <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">bolt</span>
            </button>
          </form>
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
</style>