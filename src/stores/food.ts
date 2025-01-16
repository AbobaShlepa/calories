import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IFood } from './models'

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

export const useFoodStore = defineStore('food', () => {
  const allFood = defaultFood
  const foodList = ref(allFood)

  function addFood(food: IFood) {
    allFood.push(food)
  }

  return { foodList, addFood }
})
