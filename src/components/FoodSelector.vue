<script setup lang='ts'>
import { useFoodStore } from '@/stores/food';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const selected = ref(0);
const foodStore = useFoodStore();
const { foodList } = storeToRefs(foodStore);
const weight = ref(0);

const selectedFood = computed(() => foodList.value.find(x => x.id === selected.value)!);
const totalNutrition = computed(() => ({
  calories: ((weight.value / 100) * selectedFood.value.calories).toFixed(1),
  protein: ((weight.value / 100) * selectedFood.value.protein).toFixed(1),
  fat: ((weight.value / 100) * selectedFood.value.fat).toFixed(1),
  carbs: ((weight.value / 100) * selectedFood.value.carbs).toFixed(1),
}))

</script>

<template>
  <div class="card">
    Selected: {{ selectedFood?.name }}
    <select v-model="selected" class="block">
      <option v-for="food in foodList" :key="food.id" :value="food.id">
        {{ food.name }}
      </option>
    </select>
    Enter weight:
    <input type="number" v-model="weight" />
    <div v-if="selectedFood && totalNutrition">
      Total nutrition:
      Calories: {{ totalNutrition.calories }}
      Protein: {{ totalNutrition.protein }}
      Fat: {{ totalNutrition.fat }}
      Carbs: {{ totalNutrition.carbs }}
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  color: aliceblue;
  margin: 10px;
}

.block {
  display: block;
}
</style>