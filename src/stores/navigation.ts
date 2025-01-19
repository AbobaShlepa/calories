import { defineStore } from 'pinia'
import { ref } from 'vue'

const useNavigationStore = defineStore('nav', () => {
  const showAddFood = ref(false)
  const showPerson = ref(false)

  function toggleFood() {
    showAddFood.value = !showAddFood.value
  }

  function toggleShowPerson() {
    showPerson.value = !showPerson.value
  }

  return { showAddFood, showPerson, toggleFood, toggleShowPerson }
})

export default useNavigationStore
