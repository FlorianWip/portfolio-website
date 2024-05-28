function getBaseUrl() {
  const config = useRuntimeConfig()
  return config.public.apiBaseUrl
}

async function getProjects() {
  const baseUrl = getBaseUrl()
  const res = await useFetch<Project[]>(`${baseUrl}/projects`)
  return res.data.value
}

async function postContactRequest(name: string, mail: string, message: string) {
  return $fetch('http://localhost:8080/contactrequests', {
    timeout: 1000,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, mail, message })
  })
}

export default () => {
  return {
    getProjects,
    postContactRequest
  }
}
