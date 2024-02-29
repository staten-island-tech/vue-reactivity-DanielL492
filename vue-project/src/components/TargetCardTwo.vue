<template>
  <div class="card" :id="Target.name">
   <h1>{{ Target.name }}</h1>
   <img :src="Target.img" alt="" class="card-img">
  </div>
</template>


<script setup>

const props = defineProps({
Target: Object,
});
</script>


<style scoped>

img {
  z-index: 9999999999999;
}

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
font-size: .65rem;
border-radius: 15px;
padding-top:3vh;
padding-bottom: 3vh;
margin: 7.5vh;
box-shadow: 10px 10px;
text-align: center;
}

#x {
  width:50px;
  height:100px;
}

</style>
