<script setup lang="ts">
import { useState } from '#app'

const legalNoticeOpened = ref(false)

const winWidth = useState<number>('window-width')

function getWidth(): string {
  return winWidth.value >= 1280 ? '50%' : '80%'
}
</script>

<template>
  <div
    class="mt-5 xl:mt-40 text-gray-400 h-14 w-screen z-10 border-t border-blue-950 bg-gradient-to-t from-slate-950/90 to-black via-slate-950/90 via-90%"
  >
    <div class="flex flex-row h-full text-lg xl:text-xl items-center gap-14 py-auto mx-auto w-4/5 xl:w-2/3 justify-between">
      <span class="hover:scale-110 cursor-pointer">
        © Florian Wippert <span class="hidden xl:block">(2024)</span>
      </span>
      <span class="hover:text-gray-200 hover:scale-105 cursor-pointer" @click="legalNoticeOpened = true">
        .legal-notice
      </span>
    </div>
    <n-drawer v-model:show="legalNoticeOpened" class="bg-slate-950/95 xl:bg-slate-950/80" :default-width="getWidth()">
      <n-drawer-content title="Impressum & Datenschutzerklärung">
        <LegalNotice />
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<style scoped>
.div-pos {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
