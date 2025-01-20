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

  function save(
    age: number,
    weight: number,
    height: number,
    gender: 'male' | 'female',
    activityLevel: 0 | 1 | 2 | 3 | 4,
    target: 0 | 1 | 2,
  ) {
    person.value.age = age
    person.value.weight = weight
    person.value.height = height
    person.value.gender = gender
    person.value.activityLevel = activityLevel
    person.value.target = target
  }

  return { person, calories, protein, fat, carbs, save }
})

export default usePersonsStore
