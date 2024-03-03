<template>
  <div>
      <button id="choose" @click="givecontract(targets)" >Click to Receive Contract</button>
<!--     <div class="flexcontainer">
    <TargetCard v-for="target in targets"
    :key="target.name"
    :Target="target"/>
    </div> -->
    <h3 id="hi"></h3>
    <div v-if="showCard == true">
      <div class="flexcontainer" v-for="item in array">
        <div class="card" :id="item.num">
          <h3 class="name">{{ item.name }}</h3>
          <img :src="item.img" :alt="'Image of' + item.name" class="card-img"/> <br>
          <button :id="item.num" @click="kill">Assassinate</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { targets } from "@/stores/counter.js";
import {ref} from "vue"
let showCard = ref(false);
let array = ref([]);
import { deadlist} from "@/stores/counter.js";
import {history} from "@/stores/counter.js";


function givecontract(arr) {
  showCard.value = true;
  document.querySelector("#choose").style.display = "none";
  document.querySelector("#hi").style.display = "none";
  let hi = 0;
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

  function pick() {
    let randtext = getRandomInt(0, 18);
    let rand2 = getRandomInt(0, 18);
    let rand3 = getRandomInt(0, 18);

    while ( deadlist.includes(randtext)) {
      //for (i = 0; i < targets.length; i++) {
      //if ( targets[i].num == randtext) {
      randtext = getRandomInt(0, 18)
    //}}
      }
    array.value.push(arr[randtext]);
    history.push(randtext);

    while (history.includes(rand2)) {
      if ( deadlist.includes(rand2)) {
        rand2 = getRandomInt(0, 18);
      }
    }

    history.push(rand2)
    array.value.push(arr[rand2]);
    while (history.includes(rand3)) {
      if ( deadlist.includes(rand3)) {
        rand3 = getRandomInt(0, 18);
        console.log("Print this is already dead. Trying again")
      }
      console.log("Print this is already dead. Trying again2")
    }
    history.push(rand3);
    console.log(history);
    array.value.push(arr[rand3]);
    console.log(array);
    return (hi);
  }
pick(arr);
} 

function kill(button) {
  showCard.value = false;
  //document.querySelector("#choose").style.display = "";
  document.querySelector("#hi").style.display = "";
  history.length = 0;
  function selectedProduct(arr){
  let target = arr.target;
  let parent = target.parentElement;//parent of "target"
  let hi2 = Number(parent.id);
  return(hi2);
  }
  console.log(array);
  array.value = 0;
  document.querySelector("#hi").textContent = "You have assassinated that target. Go to your target list to check remaining targets.";
  console.log("hey")
  deadlist.push(selectedProduct(button))
  let i = 0;
  for (i = 0; i < targets.length; i++) {
    if ( targets[i].num == selectedProduct(button)) {
    targets[i].dead = true;
    }}
  }
</script>

<style scoped>


/*.flexcontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}*/

.flexcontainer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

h1 {
  color: red;
}
</style>