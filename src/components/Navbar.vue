<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="text-2xl font-bold text-red-500">FoodieHubb 🍔</router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/menu" class="nav-link">Menu</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
        <router-link to="/cart" class="nav-link">Cart</router-link>
        <router-link to="/admin" class="nav-link" v-if="isLoggedIn">Admin</router-link>
        <router-link to="/login" class="nav-link" v-if="!isLoggedIn">Login</router-link>
        <button @click="logout" class="nav-link text-red-500" v-if="isLoggedIn">Logout</button>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="md:hidden text-2xl" @click="toggleMenu">
        ☰
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="showMenu" class="md:hidden px-4 pb-4 space-y-2">
      <router-link to="/" class="block nav-link">Home</router-link>
      <router-link to="/menu" class="block nav-link">Menu</router-link>
      <router-link to="/contact" class="block nav-link">Contact</router-link>
      <router-link to="/cart" class="block nav-link">Cart</router-link>
      <router-link to="/admin" class="block nav-link" v-if="isLoggedIn">Admin</router-link>
      <router-link to="/login" class="block nav-link" v-if="!isLoggedIn">Login</router-link>
      <button @click="logout" class="block nav-link text-red-500" v-if="isLoggedIn">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('loggedIn') === 'true'
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    logout() {
      localStorage.removeItem('loggedIn')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-red-500 transition-colors font-medium;
}
.router-link-exact-active {
  @apply text-red-600 font-bold;
}
</style>
