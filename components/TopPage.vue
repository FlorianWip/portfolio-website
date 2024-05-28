<script setup lang="ts">
const scrollY = useState('scroll-y')

const timeDiff = Date.now() - new Date(2003, 12, 20).getTime()
const time = new Date(timeDiff)
const years = time.getUTCFullYear() - 1970
</script>

<template>
  <div id="home" class="flex h-screen w-screen">
    <div class="flex justify-between w-4/5 xl:w-1/2 h-3/5 mx-auto mt-[30%] xl:mt-[10%]">
      <div class="h-full w-full xl:w-2/3" data-aos="fade-right">
        <div class="flex flex-col justify-center h-full">
          <span class="text-white text-5xl text-center xl:text-left">Hello my name is<br> <span class="text-red-500 font-bold">Florian</span></span>
          <p class="text-gray-300 text-xl mt-5 xl:text-left text-justify">
            I am Florian and I am {{ years }} years old. I am currently studying computer science and I live in Saxony
            in Germany.
            I am a passionate developer and I love to work with new technologies. I would describe me as a open minded
            person who is always looking for new challenges.
            I am a full-stack developer but I like Java most.
          </p>
          <div class="mx-auto xl:mx-0 mt-8">
            <NuxtLink href="/#about">
              <n-button round type="warning" ghost>
                <span class="text-gray-200 font-semibold text-xs uppercase px-1">More about me...</span>
              </n-button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-full hidden xl:block" data-aos="fade-left">
        <client-only>
          <Vue3Lottie
            animation-link="https://lottie.host/5532f949-209b-47bd-bf25-9395893da581/jx72WcApzX.json"
            loop
            :height="500"
            :width="500"
          />
        </client-only>
      </div>
    </div>
    <div :class="`position-scroll-mobile xl:position-scroll h-10 w-16 overflow-hidden ease duration-1000 ${scrollY === 0 ? 'opacity-100' : 'opacity-0'}`">
      <div class="flex flex-col text-gray-500">
        <span class="text-xs mx-auto">Scroll down</span>
        <span class="text-lg mx-auto">↓</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.position-scroll {
  position: fixed;
  bottom: 3rem;
  right: calc(50% - 2rem);
}
.position-scroll-mobile {
  display: none;
}
</style>
