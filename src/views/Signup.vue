<template>
  <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
    <h2 class="text-xl font-bold mb-4 text-center">📝 Sign Up</h2>
    <form @submit.prevent="signup">
      <input
        v-model="name"
        type="text"
        placeholder="Full Name"
        class="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button
        class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200"
      >
        Sign Up
      </button>
    </form>
    <p class="text-center text-sm mt-4 text-gray-500">
      Already have an account?
      <router-link to="/login" class="text-blue-500 hover:underline">Login here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      // For now just simulate signup
      alert(`Welcome, ${this.name}! 🎉 You’ve signed up successfully.`)
      this.$router.push('/login')
    }
  }
}
</script>
