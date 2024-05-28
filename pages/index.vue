<script setup lang="ts">
const scrollY = useState('scroll-y', () => 0)
const windowWidth = useState('window-width', () => 0)

onBeforeMount(() => {
  window.addEventListener('scroll', () => scrollY.value = window.scrollY)
  windowWidth.value = window.innerWidth
})
</script>

<template>
  <div class="scroll-smooth overflow-hidden">
    <div class="fixed top-0 right-0 h-screen w-screen bg-slate-950 -z-20 overflow-hidden">
      <div class="fixed top-0 right-0 h-screen w-screen radial-gradient -z-20 overflow-hidden" />
      <div class="h-full w-full bg-image -z-10" />
    </div>
    <Header />
    <div>
      <TopPage />
      <AboutMePage />
      <ProjectPage />
      <ContactPage />
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
</style>
