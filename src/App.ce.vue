<template>
    <div id="vue-app">
        <h1>My Vue Web Component</h1>
        <div v-if="fbInitialized">
            <HelloVue myprop="My received prop in vue " />
            <Goodbye @increased="console.log('increased')"></Goodbye>
            <DatePicker />
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import Goodbye from './Goodbye.vue';
import HelloVue from './HelloVue.vue';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const props = defineProps(['fbconfig'])

const fbInitialized = ref(false)

if (props.fbconfig) {
    const app = initializeApp(props.fbconfig)
    const db = getFirestore(app)
    provide('fbApp', app)
    provide('fbDatabase', db)
    fbInitialized.value = true
}
</script>

<style scoped></style>