<template>
    <div>
      <h2>🛒 Cart</h2>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.item }} - ₹{{ item.price }}
          <button @click="removeFromCart(index)">❌ Remove</button>
        </li>
      </ul>
      <p v-if="cart.length">Total: ₹{{ totalPrice }}</p>
      <p v-else>Cart is empty 🛍️</p>
    </div>
  </template>
  
  <script>
import { computed } from 'vue'
import { cart } from '../store/cart.js'

export default {
  name: 'AppCart', // ✅ changed from 'Cart' to 'AppCart'

  setup() {
    const total = computed(() =>
      cart.items.reduce((sum, item) => sum + item.price, 0)
    )

    const remove = (index) => {
      cart.removeFromCart(index)
    }

    return {
      cart,
      total,
      remove
    }
  }
}
</script>
