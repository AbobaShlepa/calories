import { defineStore } from 'pinia'
import type { IDay } from './models'
import { ref } from 'vue'

const useDaysStore = defineStore('days', () => {
  const daysPredefined: IDay[] = [
    {
      date: new Date('2025-01-13'),
      mealIds: [],
      active: false,
    },
    {
      date: new Date('2025-01-14'),
      mealIds: [],
      active: false,
    },
    {
      date: new Date('2025-01-15'),
      mealIds: [],
      active: false,
    },
    {
      date: new Date('2025-01-16'),
      mealIds: [],
      active: false,
    },
  ]

  const days = ref(daysPredefined)

  function addDay() {
    days.value.push({
      date: new Date(),
      mealIds: [],
      active: false,
    })
  }

  function selectDay(date: Date) {
    days.value = days.value.map((x) => ({ ...x, active: x.date === date }))
  }

  function addMealForDay(date: Date, mealId: number) {
    const day = days.value.find((x) => x.date === date)!
    day.mealIds.push(mealId)
  }

  return { days, addDay, selectDay, addMealForDay }
})

export default useDaysStore
