<template>
    <div class="home">
      <h1>Welcome to My Restaurant</h1>
      <p>Delicious food, fast service! 😋</p>
      <router-link to="/signup">
        <button>Sign Up Now</button>
      </router-link>
    </div>
  </template>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 6px;
  }
  </style>
  