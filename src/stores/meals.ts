import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IMeal } from './models'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

let counter = 1
const key = 'meals'

export const useMealsStore = defineStore(key, () => {
  const meals = ref(getFromLocalStorage<IMeal[]>(key) ?? [])

  function addMeal(name: string): number {
    meals.value.push({
      id: counter++,
      name,
      dishIds: [],
    })

    saveToLocalStorage(key, meals.value)
    return counter - 1
  }

  function updateMeal(mealId: number, dishId: number) {
    const meal = meals.value.find((x) => x.id === mealId)!
    meal.dishIds.push(dishId)
  }

  return { meals, addMeal, updateMeal }
})
