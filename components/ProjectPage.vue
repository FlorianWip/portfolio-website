<script setup lang="ts">
const request = await useFetch<Project[]>('http://localhost:8080/projects')
const projects = request.data.value
</script>

<template>
  <div id="projects" class="flex flex-col text-white py-36 w-screen">
    <div class="flex flex-col mx-auto w-2/3" data-aos="fade-right">
      <span class="font-bold text-3xl mb-6">My Projects</span>
    </div>
    <div class="flex flex-col mx-auto w-2/3 mt-4 gap-12">
      <ProjectsItem v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" />
    </div>
  </div>
</template>
