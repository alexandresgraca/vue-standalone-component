<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <button @click="increment">Click me</button>
    <ChildCounter :counter="count" />
  </div>
</template>

<script setup>
import ChildCounter from "./ChildCounter.vue"
import { ref } from 'vue';

const message = ref('Goodbye, World!');
const count = ref(0);

const emit = defineEmits(["increased"])

const increment = () => {
  count.value++;
  emit('increased', count.value)
};
</script>

<style scoped>
.container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #555;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 20px;
  color: #666;
}
</style>

