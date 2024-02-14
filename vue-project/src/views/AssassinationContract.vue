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
</script>

<style scoped>

div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: red;
}
</style>