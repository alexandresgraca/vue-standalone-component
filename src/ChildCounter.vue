<template>
  <div class="container">
    <h3>Vue Child Component</h3>
    <p>You clicked {{ counter }} times.</p>
  </div>
</template>

<script setup>
defineProps({ counter: Number })
</script>
