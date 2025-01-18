<script setup lang='ts'>
import { useDishesStore } from '@/stores/dishes';
import { useFoodStore } from '@/stores/food';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const { dishId } = defineProps({
  dishId: { type: Number, required: true },
});

const selected = ref(0);
const foodStore = useFoodStore();
const { foodList } = storeToRefs(foodStore);
const weight = ref(0);

const { updateDish, removeDish } = useDishesStore();

const onRemove = () => {
  removeDish(dishId);
}

const onSave = () => {
  updateDish(dishId, selectedFood.value.id, weight.value)
}

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
    Select food:
    <select v-model="selected" class="block">
      <option v-for="food in foodList" :key="food.id" :value="food.id">
        {{ food.name }}
      </option>
    </select>
    Enter weight:
    <input type="number" v-model="weight" />
    <div v-if="selectedFood && totalNutrition">
      <div class="block">
        Calories: {{ totalNutrition.calories }}
        Protein: {{ totalNutrition.protein }}
      </div>
      <div class="block">
        Fat: {{ totalNutrition.fat }}
        Carbs: {{ totalNutrition.carbs }}
      </div>
    </div>
    <button type="button" @click="onSave">Save</button>
    <div class="remove">
      <button @click="onRemove">-</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  color: aliceblue;
  padding: 15px;
  position: relative;
}

.block {
  display: block;
}

.remove {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
}
</style>