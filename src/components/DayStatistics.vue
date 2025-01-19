<script setup lang='ts'>
import useStatsStore from '@/stores/stats';
const statsStore = useStatsStore()
</script>

<template>
  <div class="wrapper">
    <h1>Today stats</h1>
    <div v-for="stat in statsStore.daily" :key="stat.mealName">
      <h3>{{ stat.mealName }}</h3>
      <h2>{{ stat.calories.toFixed() }}</h2>
      <h2>{{ stat.protein.toFixed() }}</h2>
      <h2>{{ stat.fat.toFixed() }}</h2>
      <h2>{{ stat.carbs.toFixed() }}</h2>
    </div>
    <div class="total" v-if="statsStore.daily.length > 0">
      <h2>Total</h2>
      <h3>Calories {{ statsStore.daily.map(x => x.calories).reduce((sum, current) => sum += current).toFixed() }}</h3>
      <h3>Protein {{ statsStore.daily.map(x => x.protein).reduce((sum, current) => sum += current).toFixed() }}</h3>
      <h3>Fat {{ statsStore.daily.map(x => x.fat).reduce((sum, current) => sum += current).toFixed() }}</h3>
      <h3>Carbs {{ statsStore.daily.map(x => x.carbs).reduce((sum, current) => sum += current).toFixed() }}</h3>
    </div>
  </div>
</template>