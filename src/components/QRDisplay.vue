<template>
    <div class="text-center">
      <h2 class="text-xl font-bold mb-4">📱 Scan QR Code</h2>
      <qrcode-vue :value="qrValue" :size="200" />
      <p class="mt-2 text-gray-600">{{ qrValue }}</p>
    </div>
  </template>
  
  <script>
  import QrcodeVue from 'qrcode.vue'
  
  export default {
    components: {
      QrcodeVue
    },
    data() {
      return {
        // Change this value to your live URL or dynamic path
        qrValue: 'https://foodiehubb.netlify.app/menu'
      }
    }
  }
  </script>
  
  <style scoped>
  /* Optional Styling */
  </style>
  