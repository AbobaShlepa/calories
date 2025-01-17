<script setup lang='ts'>
import useDaysStore from '@/stores/days';
import { useMealsStore } from '@/stores/meals';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const daysStore = useDaysStore();
const { days } = storeToRefs(daysStore);
const activeDay = computed(() => {
  return days.value.find(x => x.active);
})

const { addMeal } = useMealsStore();
const { addMealForDay } = daysStore;

const name = ref('');

const onClick = () => {
  const mealId = addMeal(name.value)
  addMealForDay(activeDay.value?.date!, mealId);
}
</script>

<template>
  <div class="add-card">
    <input type="text" v-model="name" />
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