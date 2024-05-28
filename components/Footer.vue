<script setup lang="ts">
const legalNoticeOpened = ref(false)
</script>

<template>
  <div
    class="mt-40 text-gray-400 h-14 w-screen z-10 border-t border-blue-950 bg-gradient-to-t from-slate-950/90 to-black via-slate-950/90 via-90%"
  >
    <div class="flex flex-row h-full text-xl items-center gap-14 py-auto mx-auto w-2/3 justify-between">
      <span class="hover:scale-110 cursor-pointer">
        © Florian Wippert (2024)
      </span>
      <span class="hover:text-gray-200 hover:scale-105 cursor-pointer" @click="legalNoticeOpened = true">
        .legal-notice
      </span>
    </div>
    <n-drawer v-model:show="legalNoticeOpened" :default-width="750" class="bg-slate-950/80">
      <n-drawer-content title="Impressum & Datenschutzerklärung">
        <LegalNotice />
      </n-drawer-content>
    </n-drawer>
    <a href="https://dashboard.flammenfuchs.de" target="blank">
      <div class="fixed right-6 top-2 text-3xl w-8 mt-auto hover:scale-110 hover:text-gray-100">
        <Icon name="ion:log-in-outline" />
      </div>
    </a>
  </div>
</template>

<style scoped>
.div-pos {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
