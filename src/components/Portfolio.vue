<template>
  <section class="py-32 px-6 bg-white/[0.01]" :id="id">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-24 space-y-4">
        <h4 class="text-primary font-bold uppercase tracking-[0.3em] text-xs">Exhibits</h4>
        <h2 class="text-6xl font-black uppercase italic">Master Archives</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[1200px]">
        <PortfolioItem
          size="md:col-span-8"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAwwhMl8i8PTepMZ7VvQwyFg9M6yyC9BNXOKAQl8XFT7ubXMrH4wu4YS6i3SzxegwNa5-Rx90mGUStSCH6EPL89NuH6izj0A3s3GtX76yTQGSCypB1lmT-qV7uowitRxhrFr5pwMQOrxNZRu9OzcPt43R16LHCWfbk_w8EU0FGOyFLz7rbtDYL8rGRG7by9MD9E-WDCNSB9mgqECchI_zUB5PcPMZL2_Tm6O0UkxURrKbVGhfam_IzA7I-Qjqf0SCd0xuXxCJ7TRuw"
          title="Project Xenon"
          description="Autonomous Operating Environment"
        />
        <PortfolioItem
          size="md:col-span-4"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC2oJC3_GYAa07wWCd-qdoZNLVu4_Odpn2FVMdF5da7HRvGGTuiQcusV1JawLp9qYYzZ4CqEH10GOPYA-9sk4uMpMGdCThc9fmIDlAJKleKFiOKBDthdfGVs5ObRe1V5kV-AmcgNODxz4MaKz4SqCB9xwIwrgi-g7kmdqUjvzfGBw888gICBJp0_yx2DZIkOF5scgya9vRne0TII57BkauEH3QBUIm0NY0Vr-C8ZjWBOzGrC_mnayNW8bbvZLFC3p58JOG20IuvraU"
          title="Nova OS"
          description="Neural Command Interface"
        />
        <PortfolioItem
          size="md:col-span-4"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCZf18E5Tm1wKpqArDH9MnSd4ZXxlkFFgEWTuLQ5KhAtWEzyqwPxpVg32GX3Caf1ThRo-3PQcMtmqAKJu4yMb_TACcjS-4hG2F89bOz0jZBFmzXHsDqSHZopVvGMklcw6oRgUTtNYsRnEkKzAWP6-Rw9yXy6RdoAEVhHrib26_wZMXEY9XGK_csMl6p0lk3PGvtq4FoVlSycNkWVpmbe96t3JIotRLs9wIMugc86jjn-Gc5z6kl-RqDXqKDTh9nxCJyIq9V2aKhXJ8"
          title="Aether"
          description="Spatial Data Visualizer"
        />
        <PortfolioItem
          size="md:col-span-8"
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuClpgeUnYgVB8_ZEwFOXuWJ5M4HZiT9B5R_EM5JLctRHuZ7k2QmbsSnTj4esgS57JFcnxb-UucK3-_vzzHjYPiwC--Zzl6GV7wbaf0QK4yPKTD6TwsFMvov_PGTPkvwvqHolyLLtp4Gs_QVkiD8Gf7vbvVtPH4cVkiho7THVhn7gLNHXoTV16v5EBXunzTi51YhAK7k8XimttIQdB_a-QGqYcVrU2K_Sc0dJz-S9NghI9VcD9z9WYCVVgbn4bwa4CWZ30XGggBZGYM"
          title="Core Protocol"
          description="Security Infrastructure Revamp"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PortfolioItem from './PortfolioItem.vue'

defineProps({
  id: String
})
</script>

<style scoped>
</style>