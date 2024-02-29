<template>
      <TargetCard v-for="target in targets"
      :Target="target"/>
</template>


<script setup>
import TargetCard from "@/components/TargetCard.vue"
import { targets } from "@/stores/counter.js";




</script>


<style scoped>


</style>