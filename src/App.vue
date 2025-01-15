<template>
    <div v-if="fbInitialized">
        <HelloVue  myprop="My received prop in vue " />
        <Goodbye @increased="console.log('increased')"></Goodbye>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Goodbye from './Goodbye.vue';
import HelloVue from './HelloVue.vue';
import { firebaseInit } from '.';
import { watch } from 'vue';

const props = defineProps(['fbconfig'])

const fbInitialized = ref(false)

watch(props, () => {
    if(props.fbconfig && !fbInitialized.value){
        firebaseInit(props.fbconfig)
        fbInitialized.value = true
    }
}, { immediate: true})
</script>

<style scoped>
.foo{
    color: red;
}
</style>