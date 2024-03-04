import { ref } from "vue";
import { reactive } from "vue";

export const targets = reactive([
  { name: "Templar Grand Master Robert de Sablé", 
    img: "../public/img/Robert.jpeg", dead:  false, num: 0, },
  { name: "Al Mualim", 
    img: "../public/img/Mualim.jpeg", dead:  false, num: 1, },
  { name: "William of Montferrat", img: "../public/img/William.jpeg",
  dead:  false, num: 2, },
  { name: "Abu'l Nuqoud", img: "../public/img/Nuqoud.jpeg",
  dead:  false, num: 3, },
  { name: "Majd Addin", img: "../public/img/addin.jpeg",
  dead:  false, num: 4, },
  { name: "Jubair al Hakim", img: "../public/img/Jubair.jpeg",
  dead:  false, num: 5, },
  { name: "Sibrand", img: "../public/img/Sibrand.jpeg", 
  dead:  false, num: 6, },
  { name: "Tamir", img: "../public/img/Tamir.jpeg", dead:  false, num: 7, },
  { name: "Garnier de Naplouse", img: "../public/img/Nalpouse.jpeg", dead:  false, num: 8, },
  { name: "Talal", img: "../public/img/Talal.jpeg", dead:  false, num: 9, },
  { name: "Abbas Sofian", img: "../public/img/Abbas.jpeg", dead:  false, num: 10, },
  { name: "Moloch", img: "../public/img/Moloch.jpeg", dead:  false, num: 11, },
  { name: "Shahar", img: "../public/img/Shahar.jpeg", dead:  false, num: 12, },
  { name: "Kadar", img: "../public/img/Kadar.jpeg", dead:  false, num: 13, },
]);

export let deadlist = reactive([])

export let history = reactive([])