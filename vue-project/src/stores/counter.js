import { ref } from "vue";
import { reactive } from "vue";

export const targets = reactive([
  { name: "Templar Grand Master Robert de Sablé", 
    image: "image1.jpg", dead:  false, num: 0, },
  { name: "Al Mualim", 
    image: "image2.jpg", dead:  false, num: 1, },
  { name: "William of Montferrat", image: "image3.jpg",
  dead:  false, num: 2, },
  { name: "Abu'l Nuqoud", image: "image4.jpg",
  dead:  false, num: 3, },
  { name: "Majd Addin", image: "image5.jpg",
  dead:  false, num: 4, },
  { name: "Jubair al Hakim", image: "image6.jpg",
  dead:  false, num: 5, },
  { name: "Sibrand", image: "image7.jpg", 
  dead:  false, num: 6, },
  { name: "Robert de Sable", image: "image8.jpg", dead:  false, num: 7, },
  { name: "Tamir", image: "image9.jpg", dead:  false, num: 8, },
  { name: "Garnier de Naplouse", image: "image10.jpg", dead:  false, num: 9, },
  { name: "Talal", image: "image11.jpg", dead:  false, num: 10, },
  { name: "Abbas Sofian", image: "image12.jpg", dead:  false, num: 11, },
  { name: "Moloch", image: "image13.jpg", dead:  false, num: 12, },
  { name: "Shahar", image: "image14.jpg", dead:  false, num: 13, },
  { name: "Shareen", image: "image15.jpg", dead:  false, num: 14, },
  { name: "Kadar", image: "image16.jpg", dead:  false, num: 15, },
  { name: "Tamir", image: "image17.jpg", dead:  false, num: 16, },
  { name: "Sibrand", image: "image18.jpg", dead:  false, num: 17, },
  { name: "Abu'l Nuqoud", image: "image20.jpg", dead:  false, num: 18, }
]);

export let dead = reactive([])