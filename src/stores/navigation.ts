import { defineStore } from 'pinia'
import { ref } from 'vue'

const useNavigationStore = defineStore('nav', () => {
  const showModal = ref(false)
  const showAddFood = ref(false)
  const showPerson = ref(false)

  function openModal() {
    showModal.value = true
  }

  function closeModal() {
    showModal.value = false
    showAddFood.value = false
    showPerson.value = false
  }

  function toggleFood() {
    openModal()
    showAddFood.value = !showAddFood.value
  }

  function toggleShowPerson() {
    openModal()
    showPerson.value = !showPerson.value
  }

  return { showAddFood, showPerson, showModal, toggleFood, toggleShowPerson, closeModal }
})

export default useNavigationStore
