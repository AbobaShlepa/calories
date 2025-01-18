<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DaySelector from './components/DaySelector.vue';
import DayStatistics from './components/DayStatistics.vue';
import MealContainer from './components/MealContainer.vue';
import ParametersCalculator from './components/ParametersCalculator.vue';
import useDaysStore from './stores/days';

const daysStore = useDaysStore();
const { activeDay } = storeToRefs(daysStore);


</script>

<template>
  <div class="day-wrapper">
    <DaySelector />
  </div>
  <MealContainer />
  <ParametersCalculator />
  <DayStatistics :day="activeDay.date" />
</template>

<style scoped>
.day-wrapper {
  height: 20%;
  position: sticky;
  top: 0;
}
</style>
