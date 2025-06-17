<template>
  <nav>
    <a href="/">Home</a> |
    <a href="/menu">Menu</a> |
    <a href="/login">Login</a> |
    <a href="/signup">Signup</a> |
    <a href="/admin">Admin</a> |
    <a href="/contact">Contact</a>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
nav {
  background-color: #f5f5f5;
  padding: 10px;
}
a {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}
</style>
