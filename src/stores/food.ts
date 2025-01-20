import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IFood } from './models'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

const defaultFood: IFood[] = [
  { id: 1, name: 'Rice Lidl', calories: 349, protein: 7.2, fat: 0.7, carbs: 78.5 },
  {
    id: 2,
    name: 'Butternut Squash soup',
    calories: 58,
    protein: 1.3,
    fat: 2.2,
    carbs: 7.7,
  },
]

const key = 'food'
const items = getFromLocalStorage<IFood[]>(key) ?? defaultFood

let counter = items.length === 0 ? 1 : Math.max(...items.map((x) => x.id)) + 1

export const useFoodStore = defineStore(key, () => {
  const foodList = ref(items)

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
