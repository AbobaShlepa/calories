<script setup lang='ts'>
import useNavigationStore from '@/stores/navigation';
import AddFood from './AddFood.vue';
import ParametersCalculator from './ParametersCalculator.vue';
import { storeToRefs } from 'pinia';

const navigationStore = useNavigationStore();
const { showModal } = storeToRefs(navigationStore)
</script>

<template>
  <div class="modal" v-if="showModal">
    <div class="container">
      <div class="close">
        <button type="button" @click="navigationStore.closeModal">
          X
        </button>
      </div>
      <AddFood v-if="navigationStore.showAddFood" />
      <ParametersCalculator v-if="navigationStore.showPerson" />
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: var(--color-background);
  padding: 10px;
}

.container {
  position: relative;
}

.close {
  width: 50px;
  height: 50px;
  left: 100%;
  transform: translate(0, 0);
  transform: translate(-100%, 0%);
  position: absolute;
}
</style>