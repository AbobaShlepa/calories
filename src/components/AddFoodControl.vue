<script setup lang='ts'>
import { useDishesStore } from '@/stores/dishes';

const { addDish } = useDishesStore();

const onClick = () => {
  console.log('called')
  addDish(0, 0);
}
</script>

<template>
  <div class="add-card">
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