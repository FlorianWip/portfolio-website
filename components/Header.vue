<script setup lang="ts">
const scrollY = useState('scroll-y')
</script>

<template>
  <div
    :class="`div-pos text-gray-300 h-16 w-screen z-10
   ${scrollY === 0 ? '' : 'border-b border-blue-950 bg-gradient-to-b from-slate-950 to-black via-slate-950 via-90%'}`"
  >
    <div class="flex flex-row h-full text-2xl items-center justify-center gap-4 xl:gap-14 py-auto mx-auto">
      <NuxtLink href="/#home" class="hover:text-gray-100 hover:scale-110 cursor-pointer">
        .home
      </NuxtLink>
      <NuxtLink href="/#projects" class="hover:text-gray-100 hover:scale-110 cursor-pointer">
        .projects
      </NuxtLink>
      <NuxtLink href="/#contact" class="hover:text-gray-100 hover:scale-110 cursor-pointer">
        .contact
      </NuxtLink>
    </div>
    <div class="hidden xl:block">
      <a href="https://dashboard.flammenfuchs.de" target="blank">
        <div class="fixed right-6 top-2 text-3xl w-8 mt-auto hover:scale-110 hover:text-gray-100 z-20">
          <Icon name="ion:log-in-outline" />
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.div-pos {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
