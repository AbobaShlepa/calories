import { defineStore } from 'pinia'
import type { IPerson } from './models'
import { computed, ref } from 'vue'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

let counter = 1

const key = 'persons'

const usePersonsStore = defineStore(key, () => {
  const defaultPerson: IPerson = getFromLocalStorage<IPerson>(key) ?? {
    id: counter++,
    weight: 70,
    height: 190,
    age: 30,
    gender: 'male',
    activityLevel: 1,
    target: 0,
  }

  const person = ref(defaultPerson)

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
    const constantValue = person.value.gender === 'male' ? 5 : -161
    return (
      (10 * person.value.weight +
        6.25 * person.value.height -
        5 * person.value.age +
        constantValue) *
      activityMap[person.value.activityLevel] *
      targetMap[person.value.target]
    )
  })

  const protein = computed(() => {
    return person.value.weight * 1.8
  })

  const fat = computed(() => {
    return person.value.weight * 1
  })

  const carbs = computed(() => {
    return (calories.value - protein.value * 4.1 - fat.value * 9.3) / 4
  })

  function save() {
    saveToLocalStorage(key, defaultPerson)
  }

  return { person, calories, protein, fat, carbs, save }
})

export default usePersonsStore
