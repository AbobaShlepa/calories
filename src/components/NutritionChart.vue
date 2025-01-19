<script setup lang='ts'>
import usePersonsStore from '@/stores/persons';
import useStatsStore from '@/stores/stats';

const personsStore = usePersonsStore();
const statsStore = useStatsStore()

const nutritionScore = {
  currentCalories: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.calories).reduce((sum, current) => sum += current) : 0,
  suggestedCalories: personsStore.calories,
  currentProtein: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.protein).reduce((sum, current) => sum += current) : 0,
  suggestedProtein: personsStore.protein.max,
  currentFat: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.fat).reduce((sum, current) => sum += current) : 0,
  suggestedFat: personsStore.fat.max,
  currentCarbs: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.carbs).reduce((sum, current) => sum += current) : 0,
  suggestedCarbs: personsStore.carbs.max,
}
console.log('ssd', statsStore.daily)
console.log('ns', nutritionScore)
console.log('a')

</script>

<template>
  <div class="chart">
    <div class="item calories">
      <div class="item-fill"
        :style="{ width: (nutritionScore.currentCalories / nutritionScore.suggestedCalories) * 100 + '%' }">Calories
      </div>
    </div>
    <div class="item protein">
      <div class="item-fill"
        :style="{ width: (nutritionScore.currentProtein / nutritionScore.suggestedProtein) * 100 + '%' }">Protein</div>
    </div>
    <div class="item fat">
      <div class="item-fill" :style="{ width: (nutritionScore.currentFat / nutritionScore.suggestedFat) * 100 + '%' }">
        Fat
      </div>
    </div>
    <div class="item carbs">
      <div class="item-fill"
        :style="{ width: (nutritionScore.currentCarbs / nutritionScore.suggestedCarbs) * 100 + '%' }">Carbs</div>
    </div>
  </div>
</template>

<style scoped>
.item {
  border: 2px solid #FFF;
  width: 200px;
  height: 50px;
  background-color: #FFF;
}

.item-fill {
  background-color: red;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #FFF,
}
</style>