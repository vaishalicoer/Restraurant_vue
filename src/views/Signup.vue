<template>
  <div>
    <h1>Signup</h1>
    <form>
      <label>Full Name:</label>
      <input type="text" required />

      <label>Email:</label>
      <input type="email" required />

      <label>Password:</label>
      <input type="password" required />

      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupPage'
}
</script>

<style scoped>
h1 {
  color: #8e44ad;
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
  background-color: #8e44ad;
  color: white;
  padding: 10px;
  border: none;
}
</style>
