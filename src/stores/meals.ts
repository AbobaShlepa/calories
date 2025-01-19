import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IMeal } from './models'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

const key = 'meals'
const items = getFromLocalStorage<IMeal[]>(key) ?? []
let counter = items.length === 0 ? 1 : Math.max(...items.map((x) => x.id)) + 1

export const useMealsStore = defineStore(key, () => {
  const meals = ref(items)

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
    saveToLocalStorage(key, meals.value)
  }

  return { meals, addMeal, updateMeal }
})
