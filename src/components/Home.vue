<template>
    <div>
      <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
      <div v-else-if="sampleData.length">
        <div v-for="item in sampleData" :key="item._id">
          <p>First Name: {{ item.firstName }}</p>
          <p>Last Name: {{ item.lastName }}</p>
          <p>Email: {{ item.email }}</p>
          <p>Address: {{ item.address }}</p>
          <p>Phone: {{ item.phone }}</p>
          <!-- Correct binding for image src -->
          <img :src="getImageUrl(item)" :alt="item.file.originalName" />
        </div>
      </div>
      <div v-else>No data available.</div>
    </div>
  </template>

  <script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';

  const sampleData = ref([]);
  const error = ref(null);

  const getAllSample = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/customers');
      sampleData.value = response.data;
    } catch (err) {
      error.value = err;
    }
  };

  const getImageUrl = (item) => {
    // Adjust this function to construct the correct image URL
    return `item.file.path`; // Example URL structure
  };

  onMounted(getAllSample);
  </script>

  <style scoped>
  /* Add your styles here */
  </style>
