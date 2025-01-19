<script setup lang='ts'>
import useDaysStore from '@/stores/days';
import { useDishesStore } from '@/stores/dishes';
import { useFoodStore } from '@/stores/food';
import { useMealsStore } from '@/stores/meals';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const dayStore = useDaysStore();
const { days, activeDay } = storeToRefs(dayStore)
const mealIds = days.value.find(x => x === activeDay.value)!.mealIds;

const mealStore = useMealsStore();
const { meals } = storeToRefs(mealStore);

const dishStore = useDishesStore();
const { dishes } = storeToRefs(dishStore);

const foodStore = useFoodStore();
const { foodList } = storeToRefs(foodStore);

const result = computed(() => {
  const dailyStats: {
    mealName: string,
    calories: number,
    protein: number,
    fat: number,
    carbs: number
  }[] = []
  for (const meal of meals.value.filter(x => mealIds.includes(x.id))) {
    const mealDishes = dishes.value.filter(x => meal.dishIds.includes(x.id));

    const combos = [];

    for (const dish of mealDishes) {
      const food = foodList.value.find(x => dish.foodId === x.id)!;
      combos.push({
        food,
        weight: dish.weight / 100
      })
    }

    const stats = {
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0
    }

    for (const combo of combos) {
      stats.calories += combo.food.calories * combo.weight;
      stats.protein += combo.food.protein * combo.weight;
      stats.fat += combo.food.fat * combo.weight;
      stats.carbs += combo.food.carbs * combo.weight;
    }

    dailyStats.push({
      mealName: meal.name,
      calories: stats.calories,
      protein: stats.protein,
      fat: stats.fat,
      carbs: stats.carbs
    })
  }

  return dailyStats;
});
</script>

<template>
  <div class="wrapper">
    <h1>Today stats</h1>
    <div v-for="stat in result" :key="stat.mealName">
      <h3>{{ stat.mealName }}</h3>
      <h2>{{ stat.calories.toFixed() }}</h2>
      <h2>{{ stat.protein.toFixed() }}</h2>
      <h2>{{ stat.fat.toFixed() }}</h2>
      <h2>{{ stat.carbs.toFixed() }}</h2>
    </div>
  </div>
</template>