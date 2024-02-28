<template>
  <div>
    <div class="flexcontainer">
    <TargetCard v-for="target in targets"
    :key="target.name"
    :Target="target"/></div>
  </div>
</template>


<script setup>
import TargetCard from "@/components/TargetCard.vue"
const targets = [
  { name: "Templar Grand Master Robert de Sablé", image: "image1.jpg" },
  { name: "Al Mualim", image: "image2.jpg" },
  { name: "William of Montferrat", image: "image3.jpg" },
  { name: "Abu'l Nuqoud", image: "image4.jpg" },
  { name: "Majd Addin", image: "image5.jpg" },
  { name: "Jubair al Hakim", image: "image6.jpg" },
  { name: "Sibrand", image: "image7.jpg" },
  { name: "Robert de Sable", image: "image8.jpg" },
  { name: "Tamir", image: "image9.jpg" },
  { name: "Garnier de Naplouse", image: "image10.jpg" },
  { name: "Talal", image: "image11.jpg" },
  { name: "Abbas Sofian", image: "image12.jpg" },
  { name: "Moloch", image: "image13.jpg" },
  { name: "Shahar", image: "image14.jpg" },
  { name: "Shareen", image: "image15.jpg" },
  { name: "Kadar", image: "image16.jpg" },
  { name: "Tamir", image: "image17.jpg" },
  { name: "Sibrand", image: "image18.jpg" },
  { name: "Abu'l Nuqoud", image: "image20.jpg" }
];


/*function insertimg(arr) {
    console.log(arr);
    //arr.forEach((arr) => DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="flexcontainer">
      <div class="card" id="${arr.num}">
        <img src="${arr.img}" alt="Image of ${arr.name}" class="card-img"/> <br>
        <button type="button" class="answer" id="${arr.num}" >Answer</button>
      </div>
    </div>`
  )}


function inserttext(arr) {
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
  insertimg(rand1)
  wait.push(rand1)
  history.push(randtext);
  while (history.includes(rand2)) {
    rand2 = getRandomInt(1, 36);
  }
  history.push(rand2)
  let newarr2 = arr[rand2];
  wait.push(newarr2)
  insertimg(newarr2)
  while (history.includes(rand3)) {
    rand3 = getRandomInt(1, 36);
  }
  history.push(rand3);
  let newarr3 = arr[rand3];
  insertimg(newarr3)
  wait.push(newarr3)
  console.log(history)
  let newtext = wait[getRandomInt(0, wait.length)];
  inserttext(newtext)
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


.flexcontainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}


h1 {
  color: red;
}
</style>