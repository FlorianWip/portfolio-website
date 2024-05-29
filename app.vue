<script setup lang="ts">
useHead({
  title: 'FlorianWip - Portfolio'
})
</script>

<template>
  <naive-config>
    <n-message-provider placement="bottom-right">
      <NuxtPage />
    </n-message-provider>
  </naive-config>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
