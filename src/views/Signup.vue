<template>
  <div class="signup-box">
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Your Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required />

      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="success" class="success">{{ success }}</p>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const success = ref('')

const submitForm = () => {
  error.value = ''
  success.value = ''

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }

  // Show simple success message
  success.value = '🎉 Signed up successfully!'
  
  // Clear form
  name.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>

<style scoped>
.signup-box {
  max-width: 350px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  font-family: sans-serif;
}
input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.error {
  color: red;
}
.success {
  color: green;
}
</style>
