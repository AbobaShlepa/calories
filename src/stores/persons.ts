import { defineStore } from 'pinia'
import type { IPerson } from './models'
import { ref } from 'vue'

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

  return { persons }
})

export default usePersonsStore
