<script setup lang='ts'>
import usePersonsStore from '@/stores/persons';
import useStatsStore from '@/stores/stats';
import { computed } from 'vue';

const personsStore = usePersonsStore();
const statsStore = useStatsStore()

const nutritionScore = computed(() => ({
  currentCalories: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.calories).reduce((sum, current) => sum += current) : 0,
  suggestedCalories: personsStore.calories,
  currentProtein: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.protein).reduce((sum, current) => sum += current) : 0,
  suggestedProtein: personsStore.protein,
  currentFat: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.fat).reduce((sum, current) => sum += current) : 0,
  suggestedFat: personsStore.fat,
  currentCarbs: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.carbs).reduce((sum, current) => sum += current) : 0,
  suggestedCarbs: personsStore.carbs,
}))

const percentages = computed(() => {
  return {
    calories: ((nutritionScore.value.currentCalories / nutritionScore.value.suggestedCalories) * 100).toFixed(),
    proteins: ((nutritionScore.value.currentProtein / nutritionScore.value.suggestedProtein) * 100).toFixed(),
    fat: ((nutritionScore.value.currentFat / nutritionScore.value.suggestedFat) * 100).toFixed(),
    carbs: ((nutritionScore.value.currentCarbs / nutritionScore.value.suggestedCarbs) * 100).toFixed()
  }
})

</script>

<template>
  <div class="chart">
    <div class="item">
      <div class="text">Калории ({{ percentages.calories }}%)</div>
      <div class="item-fill calories" :style="{ width: percentages.calories + '%' }">
      </div>
    </div>
    <div class="item">
      <div class="text">Белки ({{ percentages.proteins }}%)</div>
      <div class="item-fill protein" :style="{ width: percentages.proteins + '%' }">
      </div>
    </div>
    <div class="item">
      <div class="text">Жиры ({{ percentages.fat }}%)</div>
      <div class="item-fill fat" :style="{ width: percentages.fat + '%' }">
      </div>
    </div>
    <div class="item">
      <div class="text">Углеводы ({{ percentages.carbs }}%)</div>
      <div class="item-fill carbs" :style="{ width: percentages.carbs + '%' }">
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  outline: #2c3e50 4px solid;
  width: 200px;
  height: 50px;
  background-color: #250505;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
  position: relative;
  display: grid;
}

.text {
  z-index: 1;
  font-weight: bold;
}

.item-fill {
  height: 50px;
  position: absolute;
}

.fat,
.protein,
.calories,
.carbs {
  background-color: rgb(52, 6, 137)
}
</style>