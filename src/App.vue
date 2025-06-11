<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

//Accessing declared environment variable
const baseURL = __API_PATH__

//Managing loading stat and response message
const isLoading = ref(false)
const message = ref('')

async function fetchAPI() {
  try {
    //Set loading state
    isLoading.value = true
    //Get the response from calling fetch
    const response = await fetch(baseURL)
    //If call is successful, get data from the response
    const data = await response.json()
    //Add the response data to the message
    message.value = data.message
  } catch (error) {
    //If fetch call fails, notify the user
    message.value = 'Error fetching data'
    console.error(error)
  } finally {
    //Clear loading state, regardless of call succeeding or failing
    //Look up what the "finally" keyword does
    isLoading.value = false
  }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Foundry</RouterLink>
      <RouterLink to="/Collection">Collection</RouterLink>
      <RouterLink to="/Events">Events</RouterLink>
      <RouterLink to="/Resources">Resources</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
    <br /><br />
    <button @click="fetchAPI">Fetch</button>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="message">{{ message }}</p>
  </main>
</template>

<style scoped></style>
