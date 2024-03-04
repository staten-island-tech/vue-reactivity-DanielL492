<template>
  <div class="card" :id="Target.name">
   <h1>{{ Target.name }}</h1>
   <img :src="Target.img" alt="" class="card-img">
   <img id="x" src="../public/img2/redx.jpeg" alt="" v-if="Target.dead == true">
  </div>
</template>


<script setup>
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
background-image: '/img2/Map.jpeg';
width: 22.5vw;
height: 46vh;
font-size: .65rem;
border-radius: 15px;
padding-top:3vh;
padding-bottom: 3vh;
margin: 7.5vh;
box-shadow: 10px 10px;
text-align: center;
}

#x {
  z-index: 9999999999999;
  align-items: center;
  width:50px;
  height:100px;
}

</style>
