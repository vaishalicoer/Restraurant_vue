<template>
  <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
    <h2 class="text-xl font-bold mb-4 text-center">🔐 Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" class="w-full mb-3 p-2 border rounded" />
      <input v-model="password" type="password" placeholder="Password" class="w-full mb-3 p-2 border rounded" />
      <button class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      alert('Login done (mock)')
      this.$router.push('/admin')
    }
  }
}
</script>
