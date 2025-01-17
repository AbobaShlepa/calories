<script setup lang="ts">
import DaySelector from './components/DaySelector.vue';
import MealContainer from './components/MealContainer.vue';


</script>

<template>
  <div class="day-wrapper">
    <DaySelector />
  </div>
  <MealContainer />
</template>

<style scoped>
.day-wrapper {
  height: 20%;
  position: sticky;
  top: 0;
}
</style>
