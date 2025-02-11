<script setup lang='ts'>
import useDaysStore from '@/stores/days';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useDaysStore();
const { addDay, selectDay } = store;
const options: Intl.DateTimeFormatOptions = {
  month: 'numeric',
  day: 'numeric'
};

const { days } = storeToRefs(store);
const index = days.value.indexOf(store.activeDay);
const lastIndex = days.value.length - 1;
const activeIndex = ref(index === -1 ? lastIndex : index);

const onLeftCLick = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }

  selectDay(days.value[activeIndex.value].date);
}

const onRightClick = () => {
  if (activeIndex.value < days.value.length - 1) {
    activeIndex.value++;
  }

  selectDay(days.value[activeIndex.value].date);
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