<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DaySelector from './components/DaySelector.vue';
import DayStatistics from './components/DayStatistics.vue';
import MealContainer from './components/MealContainer.vue';
import ParametersCalculator from './components/ParametersCalculator.vue';
import useDaysStore from './stores/days';
import NavigationView from './components/NavigationView.vue';
import useNavigationStore from './stores/navigation';
import AddFood from './components/AddFood.vue';

const navigationStore = useNavigationStore();

</script>

<template>
  <NavigationView />
  <div class="day-wrapper">
    <DaySelector />
  </div>
  <MealContainer />
  <DayStatistics />
  <ParametersCalculator v-if="navigationStore.showPerson" />
  <AddFood v-if="navigationStore.showAddFood" />
</template>

<style scoped>
.day-wrapper {
  height: 20%;
  position: sticky;
  top: 0;
}
</style>
