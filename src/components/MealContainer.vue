<script setup lang='ts'>
import { useMealsStore } from '@/stores/meals';
import { storeToRefs } from 'pinia';
import FoodContainer from './DishContainer.vue';
import AddMealControl from './AddMealControl.vue';

const mealsStore = useMealsStore();
const { meals } = storeToRefs(mealsStore);

</script>

<template>
  <div class="wrapper">
    <FoodContainer v-for="meal in meals" :key="meal.id" :dish-ids="meal.dishIds" :meal-name="meal.name"
      :meal-id="meal.id" />
    <AddMealControl />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>