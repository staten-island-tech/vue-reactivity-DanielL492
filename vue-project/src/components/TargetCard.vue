<template>
  <div class="card" :id="Target.name">
   <h1>{{ Target.name }}</h1>
   <img :src="Target.img" alt="" class="card-img">
   <h2>{{ clicked }}</h2>
   <button @click="increment">Assassinate</button> 
  </div>
</template>


<script setup>
import {ref} from "vue";
let dead = [];
//clicker logic
const clicked = ref(0);
function increment(){
dead.push();
}  
const props = defineProps({
Target: Object,
});
</script>


<style scoped>

.card-img {
width:150px;
height:200px;
align-items: center;
}


.card {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-color: rgba(110, 110, 241, 0.774);
width: 22.5vw;
height: 46vh;
font-size: 1rem;
border-radius: 15px;
padding-top:3vh;
padding-bottom: 3vh;
margin: 7.5vh;
box-shadow: 10px 10px;
text-align: center;
}

</style>
