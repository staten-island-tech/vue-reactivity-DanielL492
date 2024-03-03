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
//import TargetCard from "@/components/TargetCard.vue"
import { targets } from "@/stores/counter.js";
import {ref} from "vue"
let showCard = ref(false);
let array = ref([]);
import { deadlist} from "@/stores/counter.js";

function givecontract(arr) {
  document.querySelector("#choose").remove();

  array = ref([]);
  showCard.value = true;
  let history = [];
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
      randtext = getRandomInt(0, 18);
    }
    array.value.push(arr[randtext]);
    history.push(randtext);

    while (history.includes(rand2)) {
      while ( deadlist.includes(rand2)) {
        rand2 = getRandomInt(0, 18);
      }
    }

    history.push(rand2)
    array.value.push(arr[rand2]);
    while (history.includes(rand3)) {
      while ( deadlist.includes(rand3)) {
        rand3 = getRandomInt(0, 18);
      }
    }

    history.push(rand3);
    array.value.push(arr[rand3]);
    history.splice(0, history.length);
    return (hi);
  }
pick(arr);

//showCard = false;

} 

function kill(button) {

  function selectedProduct(arr){
  let target = arr.target;
  let parent = target.parentElement;//parent of "target"
  let hi2 = Number(parent.id);
  console.log(hi2)
  return(hi2);
}

  console.log(array);
  array.value = 0;
  document.querySelector("#hi").textContent = "You have assassinated that target. Go to your target list to check remaining targets.";
  console.log(array)
  console.log("hey")
   deadlist.push(selectedProduct(button))
  console.log( deadlist);
  let i = 0;
  for (i = 0; i <= targets.length; i++) {
    if ( targets.num == button.id) {
    targets[i].dead = true;
    }}
}


/*function insertthing(arr) {
    console.log(arr);
    //arr.forEach((arr) => DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="flexcontainer">
      <div class="card" id="${arr.num}">
        <img src="${arr.img}" alt="Image of ${arr.name}" class="card-img"/> <br>
        <button type="button" class="answer" id="${arr.num}" >Answer</button>
      </div>
    </div>`
  )}


function (arr) {
  console.log(arr);
  DOMSelectors.container.insertAdjacentHTML("beforeend",
  `<div class="flexcontainer">
  <div class="card1" id="${arr.num}">
  <h3 class="name">${arr.name}</h6>
  </div>
  </div>`)
  return arr;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


let history = [];
let wait = [];
let hi = 0;


function pick(arr) {
  let randtext = getRandomInt(1, 36)
  let rand2 = getRandomInt(1, 36);
  let rand3 = getRandomInt(1, 36);
  let rand1 = arr[randtext];
  insertthing(rand1)
  wait.push(rand1)
  history.push(randtext);
  while (history.includes(rand2)) {
    rand2 = getRandomInt(1, 36);
  }
  history.push(rand2)
  let newarr2 = arr[rand2];
  wait.push(newarr2)
  insertthing(newarr2)
  while (history.includes(rand3)) {
    rand3 = getRandomInt(1, 36);
  }
  history.push(rand3);
  let newarr3 = arr[rand3];
  insertthing(newarr3)
  wait.push(newarr3)
  console.log(history)
  let newtext = wait[getRandomInt(0, wait.length)];
  (newtext)
  hi = newtext.num;
  history.splice(0, history.length);
  wait.splice(0, wait.length);
  return(hi);
}  


function clearcards() {
  DOMSelectors.container.textContent = "";
 };


 let hi2 = 0;


 function selectedProduct(arr){
  let target = arr.target;
  let parent = target.parentElement;//parent of "target"
  let hi2 = Number(parent.id);
  console.log(hi2)
  return(hi2);
}


 DOMSelectors.form.addEventListener("click", function (){
  clearcards();
  document.querySelector('#h33').textContent = " "
  pick(characters);
  console.log(hi)
  DOMSelectors.answer = document.querySelectorAll(".answer")
  console.log(DOMSelectors.answer)
  DOMSelectors.answer.forEach((btn) => btn.addEventListener("click", function (arr) {
    if (selectedProduct(arr) == hi) {
        document.querySelector('#h33').textContent = "Yes, you got that correct!"
        console.log("hi")
        DOMSelectors.answer = document.getElementById("hello")
        clearcards();
      }
      else if (selectedProduct(arr) != hi) {
        document.querySelector('#h33').textContent = "Wrong. Get better."
        console.log(hi2);
        console.log("no")
        DOMSelectors.answer = document.getElementById("hello")
        clearcards();
      }}))
})*/
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