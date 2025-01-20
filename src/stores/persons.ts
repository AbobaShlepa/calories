import { defineStore } from 'pinia'
import type { IPerson } from './models'
import { computed, ref } from 'vue'

let counter = 1

const usePersonsStore = defineStore('persons', () => {
  const defaultPerson: IPerson = {
    id: counter++,
    name: 'Vova',
    weight: 88,
    height: 176,
    age: 25,
    gender: 'male',
    activityLevel: 1,
    target: 0,
  }

  const persons = ref([defaultPerson])

  interface IDictionary {
    [id: number]: number
  }

  const activityMap: IDictionary = {
    [0]: 1.2,
    [1]: 1.375,
    [2]: 1.55,
    [3]: 1.7,
    [4]: 1.9,
  }

  const targetMap: IDictionary = {
    [0]: 0.9,
    [1]: 1,
    [2]: 1.1,
  }

  const calories = computed(() => {
    const constantValue = defaultPerson.gender === 'male' ? 5 : -161
    return (
      (10 * defaultPerson.weight +
        6.25 * defaultPerson.height -
        5 * defaultPerson.age +
        constantValue) *
      activityMap[defaultPerson.activityLevel] *
      targetMap[defaultPerson.target]
    )
  })

  const protein = computed(() => {
    return defaultPerson.weight * 1.8
  })

  const fat = computed(() => {
    return defaultPerson.weight * 1
  })

  const carbs = computed(() => {
    return (calories.value - protein.value * 4.1 - fat.value * 9.3) / 4
  })

  return { persons, calories, protein, fat, carbs }
})

export default usePersonsStore
