import { defineStore } from 'pinia'
import { ref } from 'vue'

let counter = 1

export const useDishesStore = defineStore('dishes', () => {
  const dishList: IDish[] = []
  const dishes = ref(dishList)

  function addDish(foodId: number, weight: number) {
    dishes.value.push({
      id: counter++,
      foodId,
      weight,
    })
  }

  function removeDish(dishId: number) {
    const dishToRemove = dishes.value.find((x) => x.id === dishId)!
    dishes.value.splice(dishes.value.indexOf(dishToRemove), 1)
  }

  return { dishes, addDish, removeDish }
})

export interface IDish {
  id: number
  foodId: number
  weight: number
}
