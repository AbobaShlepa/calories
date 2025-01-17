<script setup lang='ts'>
import { useMealsStore } from '@/stores/meals';
import { storeToRefs } from 'pinia';
import FoodContainer from './DishContainer.vue';
import AddMealControl from './AddMealControl.vue';
import useDaysStore from '@/stores/days';
import { computed } from 'vue';

const daysStore = useDaysStore();
const { days } = storeToRefs(daysStore);
const activeDay = computed(() => {
  return days.value.find(x => x.active);
})

const mealsStore = useMealsStore();
const { meals } = storeToRefs(mealsStore);

</script>

<template>
  <div class="wrapper" v-if="activeDay">
    <FoodContainer v-for="meal in mealsStore.meals.filter(x => activeDay?.mealIds.includes(x.id))" :key="meal.id"
      :dish-ids="meal.dishIds" :meal-name="meal.name" :meal-id="meal.id" />
    <AddMealControl />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>