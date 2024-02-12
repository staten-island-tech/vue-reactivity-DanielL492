<template>
    <div>
     <div class="flexcontainer">
        <div id="card">
         <h1>{{ Target.name }}</h1>
         <img :src="Target.img" alt="">
<!--          <h2>{{ clicked }}</h2> -->
<!--         <button @click="increment">Click ME</button> -->
        </div>
     </div>  
    </div>
</template>

<script setup>
/* import {ref} from "vue";
//clicker logic
const clicked = ref(0);
function increment(){
    clicked.value++;
}  */
const props = defineProps({
    Target: Object, 
});
</script>

<style scoped>
img {
    width:250px;
    height:300px;
    object-fit:cover;
}
.flexcontainer {
    flex-wrap: wrap;
    display: flex;
    justify-content: space-around;
}
#card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: rgba(110, 110, 241, 0.774);
    width: 15vw;
    height: 43vh;
    font-size: 1rem;
    border-radius: 15px;
    padding-top:3vh;
    padding-bottom: 3vh;
    margin: 7.5vh;
    box-shadow: 10px 10px;
   }
</style>