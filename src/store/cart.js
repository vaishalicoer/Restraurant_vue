// store/cart.js
import { reactive } from 'vue'

export const cart = reactive({
  items: [],
  addToCart(item) {
    const existing = cart.items.find(i => i.id === item.id)
    if (existing) {
      existing.qty++
    } else {
      cart.items.push({ ...item, qty: 1 })
    }
  },
  removeFromCart(id) {
    cart.items = cart.items.filter(i => i.id !== id)
  },
  clearCart() {
    cart.items = []
  }
})
