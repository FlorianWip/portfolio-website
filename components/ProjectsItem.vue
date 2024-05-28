<script setup lang="ts">
const props = defineProps<{ project: Project, index: number }>()
const project = props.project
const even = props.index % 2 === 0
</script>

<template>
  <div :class="`w-full flex ${even ? 'flex-row' : 'flex-row-reverse'} h-80 gap-8`" :data-aos="`${even ? 'fade-right' : 'fade-left'}`">
    <img :src="project.imageUrl" alt="Could not fetch image" class="hidden xl:block h-80 max-w-96 min-w-80 items-center rounded-xl">
    <div class="flex flex-col bg-slate-700/10 hover:shadow rounded-2xl xl:h-80 w-full my-auto px-6 py-4 justify-between">
      <span class="font-bold text-3xl text-red-500 w-full text-center">{{ project.title }}</span>
      <span class="text-gray-300 text-lg text-center mt-3">{{ project.description }}</span>
      <span class="text-gray-300 text-lg text-center mt-3"><span class="font-semibold">Technologies: </span>{{ project.technologies }}</span>
      <div class="flex mt-4 mx-auto mb-2">
        <a :href="project.url">
          <n-button round type="warning" ghost>
            <span class="text-gray-200 font-semibold text-xs uppercase px-1">Visit Website</span>
          </n-button>
        </a>
      </div>
    </div>
  </div>
</template>
