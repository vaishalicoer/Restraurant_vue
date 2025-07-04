<template>
    <div class="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h2 class="text-2xl font-bold mb-4 text-green-600">🧾 Your Past Orders</h2>
      <div v-if="orders.length === 0" class="text-gray-500">No orders yet.</div>
      <div v-else>
        <div
          v-for="order in orders"
          :key="order.id"
          class="border p-4 mb-4 rounded"
        >
          <p><strong>🆔 Order ID:</strong> {{ order.id }}</p>
          <p><strong>🕒 Date:</strong> {{ order.date }}</p>
          <p><strong>💰 Total:</strong> ₹{{ order.total }}</p>
          <ul class="list-disc pl-5 mt-2 text-gray-700">
            <li v-for="item in order.items" :key="item.name">
              {{ item.name }} × {{ item.qty }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orders: JSON.parse(localStorage.getItem('orderHistory')) || []
      }
    }
  }
  </script>
  