<template>
  <h1>Products</h1>
  <div v-if="pending">
    Loading ...
  </div>
  <ul v-else>
    <li v-for="product in products" :key="product.id">
      <article>
        <h2>{{ product.name }}</h2>
        <p>Price: {{ product.price }}</p>
      </article>
    </li>
  </ul>
</template>
<script setup>
const { data: products, pending } = await useFetch('/api/products', {
  server: false
});
</script>

<style scoped>
/* Add your custom styles here */
</style>