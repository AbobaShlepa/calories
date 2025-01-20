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
import NutritionChart from './components/NutritionChart.vue';
import ModalView from './components/ModalView.vue';

const navigationStore = useNavigationStore();

</script>

<template>
  <div class="day-wrapper">
    <DaySelector />
    <NavigationView class="nav" />
  </div>
  <MealContainer />
  <DayStatistics />
  <ModalView />
</template>

<style scoped>
.day-wrapper {
  height: 20%;
  position: sticky;
  top: 0;
}

.nav {
  width: fit-content;
  position: absolute;
  top: 0%;
  right: 0%;
}
</style>
