<template>
    <div class="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 class="text-3xl font-bold text-center mb-6 text-red-600">📞 Contact Us</h2>
  
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Contact Info -->
        <div class="text-gray-700">
          <h3 class="text-xl font-semibold mb-2">Get in Touch</h3>
          <p class="mb-2">📍 Address: 123 Foodie Street, City, India</p>
          <p class="mb-2">📧 Email: support@foodiehubb.com</p>
          <p class="mb-2">📞 Phone: +91 9876543210</p>
          <p class="text-sm text-gray-500 mt-4">We usually respond within 24 hours.</p>
        </div>
  
        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="space-y-4">
          <input
            type="text"
            v-model="name"
            placeholder="Your Name"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <input
            type="email"
            v-model="email"
            placeholder="Your Email"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <textarea
            v-model="message"
            placeholder="Your Message"
            rows="4"
            class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          ></textarea>
          <button
            class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        alert(`Thanks ${this.name}, your message has been sent!`)
        this.name = ''
        this.email = ''
        this.message = ''
      }
    }
  }
  </script>
  