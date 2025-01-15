import { defineStore } from 'pinia'
import { ref } from 'vue'

let counter = 1

const defaultFood: IFood[] = [
  { id: counter++, name: 'Rice Lidl', calories: 349, protein: 7.2, fat: 0.7, carbs: 78.5 },
]

export const useFoodStore = defineStore('food', () => {
  const allFood = defaultFood
  const foodList = ref(allFood)

  function addFood(food: IFood) {
    allFood.push(food)
  }

  return { foodList, addFood }
})

export interface IFood {
  id: number
  name: string
  calories: number
  protein: number
  fat: number
  carbs: number
}
