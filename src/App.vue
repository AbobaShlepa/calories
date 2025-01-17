<script setup lang="ts">
import DaySelector from './components/DaySelector.vue';
import MealContainer from './components/MealContainer.vue';
import ParametersCalculator from './components/ParametersCalculator.vue';


</script>

<template>
  <!-- <div class="day-wrapper">
    <DaySelector />
  </div>
  <MealContainer /> -->
  <ParametersCalculator />
</template>

<style scoped>
.day-wrapper {
  height: 20%;
  position: sticky;
  top: 0;
}
</style>
