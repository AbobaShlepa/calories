import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IMeal } from './models'

let counter = 1

export const useMealsStore = defineStore('meals', () => {
  const defaultMeals: IMeal[] = []
  const meals = ref(defaultMeals)

  function addMeal(name: string): number {
    meals.value.push({
      id: counter++,
      name,
      dishIds: [],
    })

    return counter - 1
  }

  function updateMeal(mealId: number, dishId: number) {
    const meal = meals.value.find((x) => x.id === mealId)!
    meal.dishIds.push(dishId)
  }

  return { meals, addMeal, updateMeal }
})
