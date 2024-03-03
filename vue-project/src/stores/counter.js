import { ref } from "vue";
import { reactive } from "vue";

export const targets = reactive([
  { name: "Templar Grand Master Robert de Sablé", 
    img: "../components/img/Robert.jpg", dead:  false, num: 0, },
  { name: "Al Mualim", 
    img: "../components/img/Mualim.jpeg", dead:  false, num: 1, },
  { name: "William of Montferrat", img: "../components/img/William.jpeg",
  dead:  false, num: 2, },
  { name: "Abu'l Nuqoud", img: "../components/img/Nuqoud.jpeg",
  dead:  false, num: 3, },
  { name: "Majd Addin", img: "../components/img/addin.jpeg",
  dead:  false, num: 4, },
  { name: "Jubair al Hakim", img: "../components/img/Jubair.jpeg",
  dead:  false, num: 5, },
  { name: "Sibrand", img: "../components/img/Sibrand.jpeg", 
  dead:  false, num: 6, },
  { name: "Tamir", img: "../components/img/Tamir.jpeg", dead:  false, num: 7, },
  { name: "Garnier de Naplouse", img: "../components/img/Nalpouse.jpeg", dead:  false, num: 8, },
  { name: "Talal", img: "../components/img/Talal.jpeg", dead:  false, num: 9, },
  { name: "Abbas Sofian", img: "../components/img/Abbas.jpeg", dead:  false, num: 10, },
  { name: "Moloch", img: "../components/img/Moloch.jpeg", dead:  false, num: 11, },
  { name: "Shahar", img: "../components/img/Shahar.jpeg", dead:  false, num: 12, },
  { name: "Kadar", img: "../components/img/Kadar.jpeg", dead:  false, num: 13, },
]);

export let deadlist = reactive([])

export let history = reactive([])