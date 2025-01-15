<script setup lang='ts'>
import { useDishesStore } from '@/stores/dishes';
import { storeToRefs } from 'pinia';
import FoodSelector from './FoodSelector.vue';
import AddFoodControl from './AddFoodControl.vue';

const dishesStore = useDishesStore();
const { dishes } = storeToRefs(dishesStore);
</script>

<template>
  <FoodSelector :key="dish.id" v-for="dish in dishes" :dish-id="dish.id" />
  <AddFoodControl />
</template>

<style scoped></style>