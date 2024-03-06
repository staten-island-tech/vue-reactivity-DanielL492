<template>
      <div class="flexcontainer">
            <TargetCard v-for="target in targets"
            :Target="target"/>
      </div>
</template>


<script setup>
import TargetCard from "@/components/TargetCard.vue"
import { targets } from "@/stores/counter.js";




</script>


<style scoped>

.flexcontainer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

h1 {
  color: red;
}

</style>