<script setup lang='ts'>
import { useFoodStore } from '@/stores/food';
import { reactive } from 'vue';

const { addFood } = useFoodStore();
const food = reactive({
  name: '',
  calories: 0,
  protein: 0,
  fat: 0,
  carbs: 0
})

const onClick = () => {
  addFood(food.name, food.calories, food.protein, food.fat, food.carbs)
}
</script>

<template>
  <div class="wrapper">
    <div class="form-item">
      <label for="name">Name</label>
      <input type="text" v-model="food.name" placeholder="Rice" />
    </div>
    <div class="form-item">
      <label for="calories">Calories</label>
      <input type="number" v-model="food.calories" />
    </div>
    <div class="form-item">
      <label for="protein">Protein</label>
      <input type="number" v-model="food.protein" />
    </div>
    <div class="form-item">
      <label for="fat">Fat</label>
      <input type="number" v-model="food.fat" />
    </div>
    <div class="form-item">
      <label for="carbs">Carbs</label>
      <input type="number" v-model="food.carbs" />
    </div>
    <button type="button" @click="onClick">
      Save
    </button>
  </div>
</template>

<style scoped>
.wrapper * {
  outline: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-item {
  padding: 5px;
}
</style>