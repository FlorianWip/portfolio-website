<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    required: false,
    default: 'text-gray-400'
  }
})
</script>

<template>
  <div class="flex flex-row w-16 rounded-3xl h-16 hover:scale-105 px-auto shadow p-2 items-center">
    <div class="">
      <Icon :name="icon" class="text-3xl w-12" />
    </div>
    <!--    <div :class="`mx-auto ${textColor} mt-2 my-auto`"> -->
    <!--      <span class="text-lg font-bold mx-auto">{{ name }}</span> -->
    <!--    </div> -->
  </div>
</template>

<style scoped>

</style>
