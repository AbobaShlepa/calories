<script setup lang='ts'>
import { useDishesStore } from '@/stores/dishes';
import { storeToRefs } from 'pinia';
import FoodSelector from './FoodSelector.vue';
import AddFoodControl from './AddDishControl.vue';

const { mealId, mealName, dishIds } = defineProps({
  mealId: { type: Number, required: true },
  mealName: { type: String, required: true },
  dishIds: { type: Array<Number>, required: true }
});

const dishesStore = useDishesStore();
const { dishes } = storeToRefs(dishesStore);
</script>

<template>
  <h3>{{ mealName }}</h3>
  <div class="wrapper">
    <FoodSelector :key="dish.id" v-for="dish in dishes.filter(d => dishIds.includes(d.id))" :dish-id="dish.id" />
    <AddFoodControl :meal-id />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>