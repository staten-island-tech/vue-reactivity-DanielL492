import { ref } from "vue";
import { reactive } from "vue";

export const targets = reactive([
  { name: "Templar Grand Master Robert de Sablé", 
    img: "img/Robert.jpeg", dead:  false, num: 0, },
  { name: "Al Mualim", 
    img: "img/Mualim.jpeg", dead:  false, num: 1, },
  { name: "William of Montferrat", img: "img/William.jpeg",
  dead:  false, num: 2, },
  { name: "Abu'l Nuqoud", img: "img/Nuqoud.jpeg",
  dead:  false, num: 3, },
  { name: "Majd Addin", img: "img/addin.jpeg",
  dead:  false, num: 4, },
  { name: "Jubair al Hakim", img: "img/Jubair.jpeg",
  dead:  false, num: 5, },
  { name: "Sibrand", img: "img/Sibrand.jpeg", 
  dead:  false, num: 6, },
  { name: "Tamir", img: "img/Tamir.jpeg", dead:  false, num: 7, },
  { name: "Garnier de Naplouse", img: "img/Nalpouse.jpeg", dead:  false, num: 8, },
  { name: "Talal", img: "img/Talal.jpeg", dead:  false, num: 9, },
  { name: "Abbas Sofian", img: "img/Abbas.jpeg", dead:  false, num: 10, },
  { name: "Moloch", img: "img/Moloch.jpeg", dead:  false, num: 11, },
  { name: "Shahar", img: "img/Shahar.jpeg", dead:  false, num: 12, },
  { name: "Kadar", img: "img/Kadar.jpeg", dead:  false, num: 13, },
]);

export let deadlist = reactive([])

export let history = reactive([])