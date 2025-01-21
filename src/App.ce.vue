<template>
    <div id="vue-app">
        <h1>My Vue App Web Component</h1>
        <div v-if="fbInitialized">
            <HelloVue myprop="My received prop in vue " />
            <Goodbye @increased="console.log('increased')"></Goodbye>
        </div>
    </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Goodbye from './components/Goodbye.vue'
import HelloVue from './components/HelloVue.vue'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

const props = defineProps(['fbconfig'])

const fbInitialized = ref(false)

if (props.fbconfig) {
    const app = initializeApp(props.fbconfig)
    const db = getFirestore(app)
    const auth = getAuth(app)
    provide('fbApp', app)
    provide('fbDatabase', db)
    provide('fbAuth', db)
    fbInitialized.value = true
}
</script>

<style></style>