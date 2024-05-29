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
  <div class="flex flex-col justify-center w-14 xl:w-28 rounded-2xl h-14 xl:h-28 bg-slate-600/40 xl:bg-slate-600/30 hover:scale-105 px-auto shadow p-3">
    <div class="mx-auto">
      <Icon :name="iconName" class="text-3xl mx-auto" />
    </div>
    <div class="hidden xl:block mx-auto text-gray-400 mt-2">
      <span class="text-lg font-bold mx-auto">{{ skill }}</span>
    </div>
  </div>
</template>
