<script setup lang='ts'>
import useDaysStore from '@/stores/days';

const store = useDaysStore();
const { addDay, selectDay } = store;
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

</script>

<template>
  <div class="wrapper">
    <div class="item" :class="{ active: day.active }" v-for="day in store.days" :key="day.date.toString()"
      @click="selectDay(day.date)">
      {{ day.date.toLocaleDateString('ru-RU', options) }}
    </div>
    <div class="item">
      <button @click="addDay">+</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.item {
  padding: 10px;
}

.active {
  border: 2px solid #BC68FC;
}

.item:not(.active):hover {
  border: 2px solid #7366FB;
}
</style>