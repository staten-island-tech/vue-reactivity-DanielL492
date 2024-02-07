<template>
    <div>
        <h1>{{ Target.name }}</h1>
        <img :src="Target.img" alt="">
        <h2>{{ clicked }}</h2>
        <button @click="increment">Click ME</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
const props = defineProps({
    Target: Object, 
});
//clicker logic
const clicked = ref(0);
function increment(){
    clicked.value++;
}
</script>

<style scoped>
img {
    width:250px;
    height:300px;
    object-fit:cover;
}
</style>