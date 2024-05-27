<script setup lang="ts">
const timeDiff = Date.now() - new Date(2003, 12, 20).getTime()
const time = new Date(timeDiff)
const years = time.getUTCFullYear() - 1970
</script>

<template>
  <div id="about" class="flex flex-col text-white py-36 w-screen">
    <div class="flex flex-col mx-auto w-2/3" data-aos="fade-right">
      <span class="font-bold text-3xl mb-6">About me</span>
      <div class="flex w-full">
        <div>
          <div class="border w-12 mt-3.5 border-orange-400" />
        </div>
        <div class="pl-8 text-xl text-gray-300 break-words">
          My name is Florian and I am {{ years }} years old. I am currently studying computer science and I live in Saxony (Germany).
          I love to work with a computer. Since my early teenage years I have been interested in programming and I have been programming since then.
          It started with simple Minecraft Plugins and in the years I have learned more and more things. I am searching for new challenges and I am
          always open for new things.
        </div>
      </div>
    </div>
    <div class="flex flex-col mx-auto w-2/3 mt-16" data-aos="fade-left">
      <span class="font-bold text-2xl mb-6 mx-auto">My Skills</span>
      <div class="flex w-full">
        <div class="flex flex-wrap gap-4 mx-auto w-full justify-center">
          <SkillsItem icon-name="devicon:java" skill="Java" />
          <SkillsItem icon-name="devicon:csharp" skill="C#" />
          <SkillsItem icon-name="devicon:go" skill="GoLang" />
          <SkillsItem icon-name="logos:nuxt-icon" skill="Nuxt 3" />
          <SkillsItem icon-name="devicon:nextjs" skill="Next 12" />
          <SkillsItem icon-name="devicon:tailwindcss" skill="Tailwind" />
          <SkillsItem icon-name="devicon:quarkus" skill="Quarkus" />
          <SkillsItem icon-name="devicon:redis" skill="Redis" />
          <SkillsItem icon-name="devicon:mongodb" skill="MongoDB" />
          <SkillsItem icon-name="devicon:mysql" skill="MySQL" />
          <SkillsItem icon-name="devicon:mariadb" skill="MariaDB" />
          <SkillsItem icon-name="devicon:git" skill="Git" />
          <SkillsItem icon-name="skill-icons:github-light" skill="GitHub" />
          <SkillsItem icon-name="devicon:docker" skill="Docker" />
          <SkillsItem icon-name="devicon:maven" skill="Maven" />
          <SkillsItem icon-name="devicon:gradle" skill="Gradle" />
          <SkillsItem icon-name="devicon:jetbrains" skill="IDEs" />
          <SkillsItem icon-name="simple-icons:wails" skill="WailsJS" />
          <SkillsItem icon-name="devicon:typescript" skill="TypeScript" />
          <SkillsItem icon-name="logos:drone-icon" skill="Drone" />
        </div>
      </div>
    </div>
  </div>
</template>
