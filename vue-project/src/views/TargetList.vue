<template>
    <div>
        <DestCard v-for="target in targets" 
    :key="target.name" 
    :Target="target"/>
    </div>
</template>

<script setup>
import DestCard from "@/components/DestCard.vue"
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