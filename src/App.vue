<script setup lang="ts">
import DaySelector from './components/DaySelector.vue';
import DayStatistics from './components/DayStatistics.vue';
import MealContainer from './components/MealContainer.vue';
import NavigationView from './components/NavigationView.vue';
import ModalView from './components/ModalView.vue';
</script>

<template>
  <div class="day-wrapper">
    <DaySelector />
  </div>
  <NavigationView class="nav" />
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
  position: absolute;
  top: 0;
  right: 0;
}
</style>
