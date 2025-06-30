<template>
  <div>
    <h2>📋 Our Menu</h2>
    <ul>
      <li v-for="item in menu" :key="item.id">
        {{ item.name }} - ₹{{ item.price }}
        <button @click="addToCart(item)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { cart } from '../stores/cart.js'  // 🛒 Global cart store

const menu = ref([])

const fetchMenu = async () => {
  const res = await axios.get('http://localhost:3000/menu')
  menu.value = res.data
}

const addToCart = (item) => {
  cart.value.push(item)
  alert(`${item.name} added to cart!`)
}

onMounted(fetchMenu)
</script>
