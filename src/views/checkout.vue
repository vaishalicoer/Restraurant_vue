<template>
    <div class="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 class="text-2xl font-bold text-center mb-4 text-green-700">🧾 Order Summary</h2>
  
      <div v-if="cart.items.length === 0" class="text-center text-gray-500">Your cart is empty.</div>
  
      <div v-else>
        <ul class="mb-4 space-y-3">
          <li
            v-for="item in cart.items"
            :key="item.id"
            class="flex justify-between border-b pb-2"
          >
            <span>{{ item.name }} × {{ item.qty }}</span>
            <span>₹{{ item.qty * item.price }}</span>
          </li>
        </ul>
  
        <div class="text-right text-xl font-semibold mb-6">
          Total: ₹{{ total }}
        </div>
  
        <button
          @click="payNow"
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
        >
          Pay Now with Razorpay
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { cart } from '@/store/cart'
  
  export default {
    setup() {
      const total = cart.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  
      const payNow = () => {
        const options = {
          key: 'rzp_test_YourKeyHere', // Replace with your Razorpay test key
          amount: total * 100,
          currency: 'INR',
          name: 'Foodie Hubb',
          description: 'Test Payment for Food Order',
          handler: function (response) {
            alert('✅ Payment Successful! Payment ID: ' + response.razorpay_payment_id)
            cart.clearCart()
          },
          prefill: {
            name: 'Vaishali',
            email: 'vaishali@example.com',
            contact: '9999999999'
          },
          theme: {
            color: '#4ade80'
          }
        }
  
        const rzp = new window.Razorpay(options)
        rzp.open()
      }
  
      return { cart, total, payNow }
    }
  }
  </script>
  