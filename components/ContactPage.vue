<script setup lang="ts">
import { $fetch, FetchError } from 'ofetch'

const feedback = useMessage()

const loading = ref(false)

const name = ref<string>('')
const mail = ref<string>('')
const message = ref<string>('')

// const data = reactive<{ name: string, mail: string, message: string }>({
//   name: '',
//   mail: '',
//   message: ''
// })

async function handleClick() {
  $fetch('http://localhost:8080/contactrequests', {
    timeout: 1000,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name.value, mail: mail.value, message: message.value })
  }).then(() => {
    feedback.info('Message sent successfully!')
  }).catch((err) => {
    if (err) {
      if (err instanceof FetchError) {
        const error = err as FetchError
        if (error.response) {
          if (error.statusCode === 412) {
            feedback.error('Your submitted mail is invalid!')
          }
          else if (error.statusCode === 409) {
            feedback.error('There is already a request for this mail')
          }
          else if (error.statusCode === 429) {
            feedback.error('You can only send one request every 1h')
          }
          else {
            feedback.error(`An error occurred while sending the message! ${error.statusCode} ${error.statusText}`)
          }
        }
      }
      else {
        feedback.error('An error occurred while sending the message!')
      }
    }
    else {
      feedback.error('An error occurred while sending the message!')
    }
  }).finally(() => {
    scroll({
      top: 0,
      behavior: 'smooth'
    })
    // name.value = ''
    // mail.value = ''
    // message.value = ''
    name.value = ''
    mail.value = ''
    message.value = ''
    loading.value = false
  })
}
</script>

<template>
  <div id="contact" class="relative text-white h-96 w-screen my-36 overflow-x-clip">
    <div class="absolute right-0 top-0 h-full w-full bg-gray-400/10 rotate-3 scale-150" />
    <div class="flex flex-row w-2/3 mx-auto">
      <div class="flex flex-col justify-between w-1/2 px-4 py-3" data-aos="fade-right">
        <span class="text-gray-400 text-3xl font-extrabold mx-auto">Florian Wippert</span>
        <span class="text-gray-400 text-xl font-bold mx-auto">Software Developer</span>
        <img src="https://github.com/FlorianWip.png" class="rounded-full w-40 h-40 mx-auto mt-4">
        <div class="flex flex-row mt-4 mx-auto gap-6 text-3xl">
          <a href="https://github.com/FlorianWip">
            <icon name="simple-icons:github" class=" mx-auto mt-4" />
          </a>
          <a href="https://de.linkedin.com/in/florian-wippert-884b52259">
            <icon name="devicon:linkedin" class="mx-auto mt-4" />
          </a>
          <a href="mailto:contact@florianwip.de">
            <icon name="bxs:envelope" class="mx-auto mt-4" />
          </a>
        </div>
      </div>
      <div class="flex flex-col w-1/2 px-4 py-3 justify-between" data-aos="fade-left">
        <span class="text-gray-400 text-2xl font-extrabold mx-auto">Contact Me</span>
        <form class="flex flex-col px-12 gap-4">
          <n-input v-model:value="name" placeholder="Name..." class="mt-4" />
          <n-input v-model:value="mail" placeholder="Mail..." class="mt-4" />
          <n-input v-model:value="message" placeholder="Message..." type="textarea" class="mt-4" :resizable="false" :rows="5" />
          <div class="flex mx-auto">
            <n-button class="mt-4 text-white" type="info" :loading="loading" color="#0b2f58" bordered @click="handleClick">
              Send <icon name="bi:send" class="ml-2" />
            </n-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radial-gradient {
  background: rgb(26,25,33);
  background: radial-gradient(circle, rgba(26,25,33,0.1) 0%, rgba(48,48,62,0.1) 47%, rgba(0,212,255,0.1) 100%);
}
</style>
