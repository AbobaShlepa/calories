import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IMeal } from './models'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

const key = 'meals'

export const useMealsStore = defineStore(key, () => {
  const meals = ref(getFromLocalStorage<IMeal[]>(key) ?? [])

  function addMeal(name: string): number {
    meals.value.push({
      id: id() + 1,
      name,
      dishIds: [],
    })

    saveToLocalStorage(key, meals.value)
    return id()
  }

  function updateMeal(mealId: number, dishId: number) {
    const meal = meals.value.find((x) => x.id === mealId)!
    meal.dishIds.push(dishId)
    saveToLocalStorage(key, meals.value)
  }

  const id = () => {
    return Math.max(...meals.value.map((x) => x.id))
  }

  return { meals, addMeal, updateMeal }
})
