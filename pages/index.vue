<script setup lang="ts">
import { onBeforeMount } from 'vue'

const scrollY = useState('scroll-y', () => 0)

onBeforeMount(() => {
  window.addEventListener('scroll', () => scrollY.value = window.scrollY)
})
</script>

<template>
  <div class="scroll-smooth">
    <div class="fixed top-0 right-0 h-screen w-screen bg-slate-950 -z-20 overflow-hidden">
      <div class="h-full w-full bg-image -z-10" />
    </div>
    <Header />
    <div>
      <TopPage />
      <AboutMePage />
      <ProjectPage />
      <ContactPage />
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  position: absolute;
  overflow: hidden;
  background-image: url('../public/test.png');
  background-position: center;
  background-repeat: repeat;
  scale: 400%;
  opacity: 3%;
  transform: rotate(-10deg);
  top: -35%;
  left: 25%;

}
</style>
