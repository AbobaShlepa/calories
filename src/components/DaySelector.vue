<script setup lang='ts'>
import useDaysStore from '@/stores/days';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useDaysStore();
const { addDay, selectDay } = store;
const options: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric'
};

const { days } = storeToRefs(store);
const allDays = days.value;
const index = allDays.indexOf(store.activeDay);
const lastIndex = allDays.length - 1;
const activeIndex = ref(index === -1 ? lastIndex : index);

const onLeftCLick = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }

  selectDay(allDays[activeIndex.value].date);
}

const onRightClick = () => {
  if (activeIndex.value < lastIndex) {
    activeIndex.value++;
  }

  selectDay(allDays[activeIndex.value].date);
}

</script>

<template>
  <div class="wrapper">
    <div class="arrow">
      <button type="button" @click="onLeftCLick">&lt;</button>
    </div>
    <div class="item">
      {{ store.activeDay.date.toLocaleDateString('ru-RU', options) }}
    </div>
    <div class="arrow">
      <button type="button" @click="onRightClick">&gt;</button>
    </div>
    <!-- <div class="item" :class="{ active: day.active }" v-for="day in store.days" :key="day.date.toString()"
      @click="selectDay(day.date)">
      {{ day.date.toLocaleDateString('ru-RU', options) }}
    </div> -->
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

.item,
.arrow {
  padding: 10px;
}

.active {
  border: 2px solid #BC68FC;
}
</style>