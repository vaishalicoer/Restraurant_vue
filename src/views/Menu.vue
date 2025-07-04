<template>
  <section class="p-6">
    <h2 class="text-3xl font-bold text-center mb-6">🍴 Explore Our Menu</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div v-for="item in menuItems" :key="item.id" class="bg-white p-4 rounded-xl shadow">
        <img :src="item.image" class="w-full h-48 object-cover rounded mb-2" />
        <h3 class="text-xl font-semibold">{{ item.name }}</h3>
        <p class="text-gray-600">{{ item.description }}</p>
        <div class="flex justify-between items-center mt-2">
          <span class="text-red-600 font-bold">₹{{ item.price }}</span>
          <button class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Add</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { id: 1, name: "Paneer Tikka", description: "Spicy grilled paneer", price: 250, image: "https://source.unsplash.com/400x300/?paneer" },
        { id: 2, name: "Biryani", description: "Aromatic rice delight", price: 220, image: "https://source.unsplash.com/400x300/?biryani" },
        { id: 3, name: "Gulab Jamun", description: "Sweet dessert", price: 120, image: "https://source.unsplash.com/400x300/?gulabjamun" },
      ]
    }
  }
}
</script>
