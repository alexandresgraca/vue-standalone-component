<template>
  <div class="container">
    <h3>Vue Child Component</h3>
    <p>You clicked {{ counter }} times.</p>
    <p v-if="documentId">Got document from firebase with id: {{ documentId }}</p>
    <p v-else>No document was found...</p>
  </div>
</template>

<script setup>
import { doc, getDoc } from "firebase/firestore";
import { inject, onMounted, ref } from "vue"

const db = inject('fbDatabase')

defineProps({ counter: Number })

const documentId = ref()

onMounted(async () => {
  const docRef = doc(db, "cities", "SF");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    documentId.value = docSnap.data().id
  } else {
    console.log("No such document!");
  }
})
</script>
