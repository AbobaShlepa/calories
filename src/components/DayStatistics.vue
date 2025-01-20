<script setup lang='ts'>
import useStatsStore from '@/stores/stats';
import StatsTable from './stats/StatsTable.vue';
import { computed } from 'vue';
import NutritionChart from './NutritionChart.vue';
import usePersonsStore from '@/stores/persons';
const statsStore = useStatsStore()
const personStore = usePersonsStore();

const stats = computed(() => {
  if (statsStore.daily.length === 0) {
    return null;
  }

  return {
    caption: 'Всего',
    calories: statsStore.daily.map(x => x.calories).reduce((sum, current) => sum += current),
    protein: statsStore.daily.map(x => x.protein).reduce((sum, current) => sum += current),
    fat: statsStore.daily.map(x => x.fat).reduce((sum, current) => sum += current),
    carbs: statsStore.daily.map(x => x.carbs).reduce((sum, current) => sum += current),
  }
})

const diff = computed(() => {
  if (!stats.value) {
    return null;
  }

  return {
    caption: 'Разница',
    calories: stats.value.calories - personStore.calories,
    protein: stats.value.protein - personStore.protein,
    fat: stats.value.fat - personStore.fat,
    carbs: stats.value.carbs - personStore.carbs,
  }
})

const norm = {
  caption: 'Норма',
  calories: personStore.calories,
  protein: personStore.protein,
  fat: personStore.fat,
  carbs: personStore.carbs
}
</script>

<template>
  <div class="wrapper">
    <StatsTable v-for="stat in statsStore.daily" v-bind="stat" :caption="stat.mealName" :key="stat.mealName" />
    <StatsTable v-if="stats" v-bind="stats" />
    <StatsTable v-bind="norm" />
    <StatsTable v-if="diff" v-bind="diff" />
    <NutritionChart />
  </div>
</template>

<style scoped>
.wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: left;
}
</style>