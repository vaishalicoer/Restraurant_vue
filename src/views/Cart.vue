<template>
    <div class="p-6 max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">🛒 Your Cart</h2>
  
      <div v-if="cart.items.length === 0" class="text-gray-500">Cart is empty</div>
  
      <div v-else class="space-y-4">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="flex justify-between bg-white p-4 rounded shadow"
        >
          <div>
            <h3 class="font-semibold">{{ item.name }}</h3>
            <p>Qty: {{ item.qty }}</p>
          </div>
          <div class="text-right">
            <p class="text-red-600 font-bold">₹{{ item.qty * item.price }}</p>
            <button
              class="text-sm text-blue-500 hover:underline"
              @click="cart.removeFromCart(item.id)"
            >
              Remove
            </button>
          </div>
        </div>
  
        <router-link to="/checkout">
          <button class="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Proceed to Checkout
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { cart } from '@/store/cart'
  
  export default {
    setup() {
      return { cart }
    }
  }
  </script>
  