<template>
    <div class="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 class="text-2xl font-bold text-center mb-6 text-red-600">🍛 Admin – Manage Menu</h2>
  
      <!-- Add/Edit Form -->
      <form @submit.prevent="addOrUpdateItem" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <input v-model="form.name" type="text" placeholder="Item Name" class="p-2 border rounded" required />
        <input v-model.number="form.price" type="number" placeholder="Price (₹)" class="p-2 border rounded" required />
        <button class="bg-green-500 text-white rounded p-2 hover:bg-green-600">
          {{ editingIndex !== null ? 'Update' : 'Add' }}
        </button>
      </form>
  
      <!-- Item Table -->
      <table class="min-w-full text-left table-auto border">
        <thead>
          <tr class="bg-gray-100 border-b text-gray-700">
            <th class="p-3">#</th>
            <th class="p-3">Name</th>
            <th class="p-3">Price</th>
            <th class="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="item.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="p-3">{{ index + 1 }}</td>
            <td class="p-3">{{ item.name }}</td>
            <td class="p-3">₹{{ item.price }}</td>
            <td class="p-3 space-x-2">
              <button @click="editItem(index)" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
              <button @click="deleteItem(index)" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: JSON.parse(localStorage.getItem('menuItems')) || [],
        form: {
          name: '',
          price: ''
        },
        editingIndex: null
      }
    },
    methods: {
      addOrUpdateItem() {
        if (this.editingIndex !== null) {
          this.items[this.editingIndex] = { ...this.form }
          this.editingIndex = null
        } else {
          this.items.push({ ...this.form, id: Date.now() })
        }
        this.saveItems()
        this.form = { name: '', price: '' }
      },
      deleteItem(index) {
        this.items.splice(index, 1)
        this.saveItems()
      },
      editItem(index) {
        this.form = { ...this.items[index] }
        this.editingIndex = index
      },
      saveItems() {
        localStorage.setItem('menuItems', JSON.stringify(this.items))
      }
    }
  }
  </script>
  