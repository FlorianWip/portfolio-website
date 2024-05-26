<script setup lang="ts">
</script>

<template>
  <div id="contact" class="flex flex-col text-white py-36 w-screen">
    <div class="flex flex-col mx-auto w-2/3" data-aos="fade-right">
      <span class="font-bold text-3xl mb-6">Contact me</span>
      <div class="flex w-full">
        <div>
          <div class="border w-12 mt-3.5 border-orange-400" />
        </div>
        <div class="pl-8 text-xl text-gray-300">
          I am always open for new projects and challenges. If you have any questions or want to work with me, feel free to contact me.
          I love to contribute to projects to earn more experience and expand my portfolio.
        </div>
      </div>
    </div>
    <div class="flex flex-col mx-auto w-2/3 mt-16" data-aos="fade-left">
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
          <SkillsItem icon-name="devicon:github" skill="GitHub" />
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
