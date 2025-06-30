<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // You can add real authentication later
      if (this.email && this.password) {
        alert('Login successful!');
        this.$router.push('/');
      } else {
        alert('Please fill all fields');
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
input {
  width: 100%;
  margin-bottom: 10px;
}
button {
  width: 100%;
  padding: 10px;
}
</style>

