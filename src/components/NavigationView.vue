<script setup lang='ts'>
import useNavigationStore from '@/stores/navigation';

const navigationStore = useNavigationStore();
</script>

<template>
  <nav>
    <button type="button" @click="navigationStore.toggleFood">Еда</button>
    <button type="button" @click="navigationStore.toggleShowPerson">Чел</button>
  </nav>
</template>
