<template>
  <div class="wassup">  
    <button id="choose" @click="givecontract(targets)">Receive Contracts</button>
    <h3 id="hi">No Contracts Received Yet</h3>
    <div v-if="showCard == true">
      <div class="betterflexcontainer">
      <div class="uselessflexcontainer" v-for="item in array" :key="item.num">
        <div class="card" :id="item.num">
          <h3 class="name">{{ item.name }}</h3>
          <img :src="item.img" :alt="'Image of ' + item.name" class="card-img"/> <br>
          <button class="button2" :id="item.num" @click="kill">Assassinate</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { targets } from "@/stores/counter.js";
import { ref } from "vue";
import { deadlist } from "@/stores/counter.js";
import { history } from "@/stores/counter.js";

let showCard = ref(false);
let array = ref([]);

function givecontract(arr) {
  showCard.value = true;
  document.querySelector("#choose").style.display = "none";
  document.querySelector("#hi").style.display = "none";
  pick(arr);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function pick(arr) {
  array.value = [];
  history.length = 0;

  function getRandomNumber() {
    let index = 0;
    while (deadlist.includes(index) || history.includes(index)) {
      if (deadlist.length <= 10) {
        index = getRandomInt(0, arr.length);
        console.log("nope")
      }
      else {
        document.querySelector("#hi").style.display = "";
        document.querySelector("#hi").textContent = "You have reached your limit, assassinating any more targets will cause divergence from the timeline and desynchronization will occur.";
        index = [-1];
        break
      }
    };
    return index;
  }

  const hi = getRandomNumber()

  for (let i = 0; i < 3; i++) {
      const randIndex = getRandomNumber();
      array.value.push(arr[randIndex]);
      history.push(randIndex);

    }
  }

function kill(event) {
  showCard.value = false;
  document.querySelector("#choose").style.display = "";
  document.querySelector("#hi").style.display = "";
  array.value = [];

  function selectedProduct() {
    const target = event.target;
    const parent = target.parentElement; // parent of "target"
    return Number(parent.id);
  }

  const selectedTarget = selectedProduct();
  console.log(array);
  document.querySelector("#hi").textContent = "You have assassinated that target. Go to your target list to check remaining targets.";
  deadlist.push(selectedTarget);

  for (let i = 0; i < targets.length; i++) {
    if (targets[i].num === selectedTarget) {
      targets[i].dead = true;
    }
  }
}
</script>


<style scoped>

.card-img {
width:125px;
height:200px;
align-items: center;
border-radius: 10px;
}


.card {
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
background-image: '../components/img/Map.jpeg';
width: 22.5vw;
height: 46vh;
font-size: 1rem;
border-radius: 15px;
padding-top:3vh;
padding-bottom: 3vh;
margin: 7.5vh;
box-shadow: 10px 10px;
text-align: center;
text-emphasis-color: black;
background-color: rgba(248, 205, 103, 0.781);
}

h1 {
  color: red;
}

#hi {
  background-color: rgba(6, 65, 167, 0.863);
  text-align: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 12.5%; 
  padding-left: 10%, 10%;
  padding-right: 10%;
  padding: 5%;
  border-radius: 10px;
}

#choose {
  padding-left: 2%;
  padding-right:2%;
  padding-top: .5%;
  padding-bottom: .5%;
  background-color: brown;
  margin-left: 5%;
  margin-top: 3%;
  text-align: center;
  border-radius: 10px;
}

.betterflexcontainer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 5%;
}

.button2 {
  background-color: black;
  color: red;
}
</style>