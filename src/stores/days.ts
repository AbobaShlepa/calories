import { defineStore } from 'pinia'
import type { IDay } from './models'
import { computed, ref } from 'vue'
import { getFromLocalStorage, saveToLocalStorage } from './localStorageUtils'

const daysPredefined: IDay[] = [
  {
    date: new Date('2025-01-13'),
    mealIds: [],
    active: true,
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

const key = 'days'

const useDaysStore = defineStore(key, () => {
  function getInitialData(): IDay[] {
    const data = getFromLocalStorage<IDay[]>(key)
    if (!data) {
      return daysPredefined
    }

    const newData = data.map((x) => ({
      date: new Date(x.date),
      mealIds: x.mealIds,
      active: x.active,
    }))

    return newData
  }

  const days = ref(getInitialData())

  const activeDay = computed(() => {
    return days.value.find((x) => x.active)!
  })

  function addDay() {
    days.value.push({
      date: new Date(),
      mealIds: [],
      active: false,
    })
    saveToLocalStorage(key, days.value)
  }

  function selectDay(date: Date) {
    days.value = days.value.map((x) => ({ ...x, active: x.date === date }))
  }

  function addMealForDay(date: Date, mealId: number) {
    const day = days.value.find((x) => x.date === date)!
    day.mealIds.push(mealId)
    saveToLocalStorage(key, days.value)
  }

  return { days, addDay, selectDay, addMealForDay, activeDay }
})

export default useDaysStore
