import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IFood } from './models'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

let counter = 1

const defaultFood: IFood[] = [
  { id: counter++, name: 'Rice Lidl', calories: 349, protein: 7.2, fat: 0.7, carbs: 78.5 },
  {
    id: counter++,
    name: 'Butternut Squash soup',
    calories: 58,
    protein: 1.3,
    fat: 2.2,
    carbs: 7.7,
  },
]

const key = 'food'

export const useFoodStore = defineStore(key, () => {
  const foodList = ref(getFromLocalStorage<IFood[]>(key) ?? defaultFood)

  function addFood(name: string, calories: number, protein: number, fat: number, carbs: number) {
    foodList.value.push({
      id: counter++,
      name,
      calories,
      protein,
      fat,
      carbs,
    })
    saveToLocalStorage(key, foodList.value)
  }

  return { foodList, addFood }
})
