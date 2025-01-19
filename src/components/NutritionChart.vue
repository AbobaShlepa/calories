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
  suggestedProtein: personsStore.protein.max,
  currentFat: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.fat).reduce((sum, current) => sum += current) : 0,
  suggestedFat: personsStore.fat.max,
  currentCarbs: statsStore.daily.length > 0 ? statsStore.daily.map(x => x.carbs).reduce((sum, current) => sum += current) : 0,
  suggestedCarbs: personsStore.carbs.max,
}))

</script>

<template>
  <div class="chart">
    <div class="item">
      <div class="item-fill calories"
        :style="{ width: (nutritionScore.currentCalories / nutritionScore.suggestedCalories) * 100 + '%' }">Calories
      </div>
    </div>
    <div class="item">
      <div class="item-fill protein"
        :style="{ width: (nutritionScore.currentProtein / nutritionScore.suggestedProtein) * 100 + '%' }">Protein</div>
    </div>
    <div class="item">
      <div class="item-fill fat"
        :style="{ width: (nutritionScore.currentFat / nutritionScore.suggestedFat) * 100 + '%' }">
        Fat
      </div>
    </div>
    <div class="item">
      <div class="item-fill carbs"
        :style="{ width: (nutritionScore.currentCarbs / nutritionScore.suggestedCarbs) * 100 + '%' }">
        Carbs
      </div>
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
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.fat {
  background-color: #04d37d
}

.protein {
  background-color: #4872ee
}

.calories {
  background-color: red
}

.carbs {
  background-color: #d9f007
}
</style>