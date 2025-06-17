<template>
  <div>
    <h1>Login</h1>
    <form>
      <label>Email:</label>
      <input type="email" required />

      <label>Password:</label>
      <input type="password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style scoped>
h1 {
  color: #27ae60;
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
}
input {
  padding: 8px;
  margin-bottom: 10px;
}
button {
  background-color: #27ae60;
  color: white;
  padding: 10px;
  border: none;
}
</style>
