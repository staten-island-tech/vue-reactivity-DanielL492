import { ref } from "vue";
import { reactive } from "vue";

export const targets = reactive([
  { name: "Templar Grand Master Robert de Sablé", 
    image: "../components/img/Robert.jpg", dead:  false, num: 0, },
  { name: "Al Mualim", 
    image: "../components/img/Mualim.jpeg", dead:  false, num: 1, },
  { name: "William of Montferrat", image: "../components/img/William.jpeg",
  dead:  false, num: 2, },
  { name: "Abu'l Nuqoud", image: "../components/img/Nuqoud.jpeg",
  dead:  false, num: 3, },
  { name: "Majd Addin", image: "../components/img/addin.jpeg",
  dead:  false, num: 4, },
  { name: "Jubair al Hakim", image: "../components/img/Jubair.jpeg",
  dead:  false, num: 5, },
  { name: "Sibrand", image: "../components/img/Sibrand.jpeg", 
  dead:  false, num: 6, },
  { name: "Tamir", image: "../components/img/Tamir.jpeg", dead:  false, num: 7, },
  { name: "Garnier de Naplouse", image: "../components/img/Nalpouse.jpeg", dead:  false, num: 8, },
  { name: "Talal", image: "../components/img/Talal.jpeg", dead:  false, num: 9, },
  { name: "Abbas Sofian", image: "../components/img/Abbas.jpeg", dead:  false, num: 10, },
  { name: "Moloch", image: "../components/img/Moloch.jpeg", dead:  false, num: 11, },
  { name: "Shahar", image: "../components/img/Shahar.jpeg", dead:  false, num: 12, },
  { name: "Kadar", image: "../components/img/Kadar.jpeg", dead:  false, num: 13, },
]);

export let deadlist = reactive([])

export let history = reactive([])