<script setup lang='ts'>
import { useMealsStore } from '@/stores/meals';
import { ref } from 'vue';

const { addMeal } = useMealsStore();

const name = ref('');

const onClick = () => {
  addMeal(name.value)
}
</script>

<template>
  <div class="add-card">
    <input type="text" v-model="name" />
    <button @click="onClick">+</button>
  </div>
</template>

<style scoped>
.add-card {
  width: 250px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 50px;
  height: 50px;
}
</style>