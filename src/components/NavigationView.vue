<script setup lang='ts'>
import useNavigationStore from '@/stores/navigation';
import IconFood from './icons/IconFood.vue';
import IconPerson from './icons/IconPerson.vue';

const navigationStore = useNavigationStore();
</script>

<template>
  <nav>
    <button type="button" @click="navigationStore.toggleFood">
      <IconFood />
    </button>
    <button type="button" @click="navigationStore.toggleShowPerson">
      <IconPerson />
    </button>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
</style>