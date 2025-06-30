<template>
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Admin',
    data() {
      return {
        menuItems: ['Pizza', 'Burger', 'Pasta']
      }
    }
  }
  </script>
  