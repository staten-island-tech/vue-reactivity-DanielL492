import { ref } from "vue";
import { reactive } from "vue";

export const targets = reactive([
  { name: "Templar Grand Master Robert de Sablé", 
    img: "https://static.wikia.nocookie.net/assassinscreed/images/d/db/AC1_Robert_render.png/revision/latest?cb=20140118214413", dead:  false, num: 0, },
  { name: "Al Mualim", 
    img: "https://static.wikia.nocookie.net/assassinscreed/images/6/65/ACR_Al_Mualim.png/revision/latest?cb=20141027183648", dead:  false, num: 1, },
  { name: "William of Montferrat", img: "../stores/img/William.jpeg",
  dead:  false, num: 2, },
  { name: "Abu'l Nuqoud", img: "../stores/img/Nuqoud.jpeg",
  dead:  false, num: 3, },
  { name: "Majd Addin", img: "../stores/img/addin.jpeg",
  dead:  false, num: 4, },
  { name: "Jubair al Hakim", img: "../stores/img/Jubair.jpeg",
  dead:  false, num: 5, },
  { name: "Sibrand", img: "../stores/img/Sibrand.jpeg", 
  dead:  false, num: 6, },
  { name: "Tamir", img: "../stores/img/Tamir.jpeg", dead:  false, num: 7, },
  { name: "Garnier de Naplouse", img: "../stores/img/Nalpouse.jpeg", dead:  false, num: 8, },
  { name: "Talal", img: "../stores/img/Talal.jpeg", dead:  false, num: 9, },
  { name: "Abbas Sofian", img: "../stores/img/Abbas.jpeg", dead:  false, num: 10, },
  { name: "Moloch", img: "../stores/img/Moloch.jpeg", dead:  false, num: 11, },
  { name: "Shahar", img: "../stores/img/Shahar.jpeg", dead:  false, num: 12, },
  { name: "Kadar", img: "../stores/img/Kadar.jpeg", dead:  false, num: 13, },
]);

export let deadlist = reactive([])

export let history = reactive([])