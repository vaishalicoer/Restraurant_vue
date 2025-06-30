// src/stores/cart.js
import { ref, watch } from 'vue'

export const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

watch(cart, (newVal) => {
  localStorage.setItem('cart', JSON.stringify(newVal))
}, { deep: true })
