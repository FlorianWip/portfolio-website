<script setup lang="ts">
const content = ref('')
const contentNumber = ref(0)
const numberMode = ref(false)
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&display=swap" rel="stylesheet">
  <div class="scroll-smooth overflow-hidden">
    <div class="fixed top-0 right-0 h-screen w-screen bg-slate-950 -z-20 overflow-hidden">
      <div class="fixed top-0 right-0 h-screen w-screen radial-gradient -z-20 overflow-hidden" />
      <div class="h-full w-full bg-image -z-10" />
    </div>
    <Header />
    <div class="flex flex-col w-full xl:w-1/2 px-4 py-3 justify-between mt-24 mx-auto" data-aos="fade-left">
      <span class="text-gray-400 text-2xl font-extrabold mx-auto">Barcode Generator</span>
      <div :class="numberMode ? 'hidden' : 'block'" class="flex flex-col xl:px-24">
        <span class="text-gray-400 text-8xl font-extrabold mx-auto libre-barcode-128-regular">{{ content }}</span>
        <n-input v-model:value="content" placeholder="Barcode Inhalt..." class="mt-4" />
      </div>
      <div :class="numberMode ? 'block' : 'hidden'" class="flex flex-col xl:px-24">
        <span :class="(contentNumber === 0) ? 'hidden' : ''" class="text-gray-400 text-8xl font-extrabold mx-auto libre-barcode-128-regular">{{ contentNumber }}</span>
        <n-input-number v-model:value="contentNumber" :clearable="true" placeholder="Barcode Inhalt..." class="mt-4" />
      </div>
      <div class="flex flex-row gap-4 xl:px-24">
        <n-switch v-model:value="numberMode" :on-change="() => { content = ''; contentNumber = 0; }" placeholder="Barcode Inhalt..." class="mt-4" />
        <span class="text-gray-400 text-xl py-3">Number Mode</span>
      </div>
    </div>
    <div class="absolute bottom-0">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  position: absolute;
  overflow: hidden;
  background-image: url('/grid.png');
  background-position: center;
  background-repeat: repeat;
  scale: 400%;
  opacity: 3%;
  transform: rotate(-10deg);
  top: -35%;
  left: 25%;
}
.radial-gradient {
  background: rgb(26,25,33);
  background: radial-gradient(circle, rgba(26,25,33,0.1) 0%, rgba(48,48,62,0.1) 47%, rgba(0,212,255,0.1) 100%);
}
.libre-barcode-128-regular {
   font-family: "Libre Barcode 128", system-ui;
   font-weight: 400;
   font-style: normal;
 }
</style>
