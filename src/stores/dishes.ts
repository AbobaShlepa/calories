import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IDish } from './models'

let counter = 1

export const useDishesStore = defineStore('dishes', () => {
  const dishList: IDish[] = []
  const dishes = ref(dishList)

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
  }

  return { dishes, addDish, removeDish }
})
