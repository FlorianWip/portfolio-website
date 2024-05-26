<script setup lang="ts">
defineProps({
  skill: {
    type: String,
    required: true
  },
  iconName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col w-28 rounded-2xl h-28 bg-slate-600/30 hover:scale-105 px-auto shadow p-3">
    <div class="mx-auto">
      <Icon :name="iconName" class="text-5xl mx-auto" />
    </div>
    <div class="mx-auto text-gray-400 mt-2">
      <span class="text-lg font-bold mx-auto">{{ skill }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
