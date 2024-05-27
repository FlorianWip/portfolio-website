<script setup lang="ts">
import { useState } from '#app'

const loading = useState(() => false)
loading.value = false

const name: string = ''
const mail: string = ''
const message: string = ''

async function handleClick() {
  loading.value = true
}
</script>

<template>
  <div id="contact" class="flex text-white py-36 w-screen">
    <div class="flex flex-row w-2/3 mx-auto">
      <div class="w-2/3">
        <span>t</span>
      </div>
      <div class="w-1/3 bg-gray-400/10 rounded p-3">
        <form class="flex flex-col gap-2 text-lg text-gray-400">
          <span class="mx-auto">Your Mail</span>
          <n-skeleton v-if="loading" class="my-2" />
          <n-input v-else :input-props="{ type: 'email' }" name="mail" placeholder="john.doe@example.com" :on-change="val => mail = val" />
          <span class="mx-auto">Your Name</span>
          <n-skeleton v-if="loading" class="my-2" />
          <n-input v-else type="text" name="name" placeholder="John Doe" :on-change="val => name = val" />
          <span class="mx-auto">Your Message</span>
          <n-skeleton v-if="loading" class="mt-1.5" :repeat="4" />
          <n-input
            v-else type="textarea" name="name" rows="5" show-count :resizable="false" :on-change="val => message = val"
            placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At"
          />
          <n-button round type="warning" ghost class="mt-1" @click="handleClick">
            <span class="text-gray-200 font-semibold text-xs uppercase px-1">Send</span>
          </n-button>
        </form>
      </div>
    </div>
  </div>
</template>
