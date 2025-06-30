<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/menu">Menu</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Signup</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  text-align: center;
  background-color: #42b983;
  padding: 15px;
}
router-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
</style>
