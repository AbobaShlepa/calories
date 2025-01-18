import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IDish } from './models'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

let counter = 1

const key = 'dishes'

export const useDishesStore = defineStore('dishes', () => {
  const dishes = ref(getFromLocalStorage<IDish[]>(key) ?? [])

  function addDish(foodId: number, weight: number): number {
    dishes.value.push({
      id: counter++,
      foodId,
      weight,
    })

    return counter - 1
  }

  function removeDish(dishId: number) {
    const dishToRemove = dishes.value.find((x) => x.id === dishId)!
    dishes.value.splice(dishes.value.indexOf(dishToRemove), 1)
    saveToLocalStorage(key, dishes.value)
  }

  function updateDish(dishId: number, foodId: number, weight: number) {
    const dish = dishes.value.find((x) => x.id === dishId)!
    dish.foodId = foodId
    dish.weight = weight
    saveToLocalStorage(key, dishes.value)
  }

  return { dishes, addDish, removeDish, updateDish }
})
