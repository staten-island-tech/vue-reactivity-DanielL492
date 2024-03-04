<template>
  <div class="card" :id="Target.name">
   <h1>{{ Target.name }}</h1>
   <img :src="Target.img" alt="" class="card-img">
   <img id="x" src="/img2/redx2.jpeg" alt="" v-if="Target.dead == true">
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
height:225px;
align-items: center;
border-radius: 15px;
}


.card {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
flex-direction: column;
background-color: rgba(255, 255, 129, 0.898);
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
  z-index: 999999;
  align-items: center;
  width:50px;
  height:100px;
}

</style>
