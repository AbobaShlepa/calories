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
  food.name = ''
  food.calories = 0;
  food.protein = 0;
  food.fat = 0
  food.carbs = 0
}
</script>

<template>
  <div class="wrapper">
    <div class="form-item">
      <label for="name">Название</label>
      <input type="text" v-model="food.name" placeholder="Rice" />
    </div>
    <div class="form-item">
      <label for="calories">Калории</label>
      <input type="number" v-model="food.calories" />
    </div>
    <div class="form-item">
      <label for="protein">Белок</label>
      <input type="number" v-model="food.protein" />
    </div>
    <div class="form-item">
      <label for="fat">Жир</label>
      <input type="number" v-model="food.fat" />
    </div>
    <div class="form-item">
      <label for="carbs">Углеводы</label>
      <input type="number" v-model="food.carbs" />
    </div>
    <button type="button" @click="onClick">
      Добавить
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  border: #2c3e50 4px solid;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-item {
  padding: 5px;
}

label {
  display: block;
}
</style>