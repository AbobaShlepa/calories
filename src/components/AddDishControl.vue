<script setup lang='ts'>
import { useDishesStore } from '@/stores/dishes';
import { useMealsStore } from '@/stores/meals';

const { mealId } = defineProps({
  mealId: { type: Number, required: true }
})

const { addDish } = useDishesStore();
const { updateMeal } = useMealsStore();

const onClick = () => {
  const dishId = addDish(1, 0);
  updateMeal(mealId, dishId);
}
</script>

<template>
  <div class="add-card">
    <button @click="onClick">+</button>
  </div>
</template>

<style scoped>
.add-card {
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 50px;
  height: 50px;
}
</style>