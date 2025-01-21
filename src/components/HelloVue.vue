<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" placeholder="Type something..." />
    <h3>Received prop: {{ myprop }}</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({ myprop: String })

const message = ref('Hello, World!');
</script>

<style scoped>
.container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(100% - 22px);
}
</style>
