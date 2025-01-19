<script setup lang='ts'>
import usePersonsStore from '@/stores/persons';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const personStore = usePersonsStore();
const { persons, calories, protein, fat, carbs } = storeToRefs(personStore);
const person = persons.value[0];

const gender = ref(person.gender);
const age = ref(person.age);
const weight = ref(person.weight);
const height = ref(person.height);
const activityLevel = ref(person.activityLevel);
const target = ref(person.target);
</script>

<template>
  <div class="wrapper">
    <div class="form-item">
      <input name="age" v-model="age" type="number" />
      <label for="age">Age</label>
    </div>
    <div class="form-item">
      <input name="gender-male" type="radio" v-model="gender" value="male" checked />
      <label for="gender-male">Male</label>
      <input name="gender-female" type="radio" v-model="gender" value="female" />
      <label for="gender">Female</label>
    </div>
    <div class="form-item">
      <input name="weight" type="number" v-model="weight" />
      <label for="weight">Weight (kg)</label>
    </div>
    <div class="form-item">
      <input name="height" type="number" v-model="height">
      <label for="height">Height (cm)</label>
    </div>
    <div class="form-item">
      Activity level:
      <br />
      <input name="al-0" type="radio" v-model="activityLevel" value="0">
      <label for="al-0">Minimal</label>
      <input name="al-1" type="radio" v-model="activityLevel" value="1">
      <label for="al-1">Weak</label>
      <input name="al-2" type="radio" v-model="activityLevel" value="2">
      <label for="al-2">Medium</label>
      <input name="al-3" type="radio" v-model="activityLevel" value="3">
      <label for="al-325">High</label>
      <input name="al-4" type="radio" v-model="activityLevel" value="4">
      <label for="al-4">Extreme</label>
    </div>
    <div>
      Target:
      <br />
      <input name="t-0" type="radio" v-model="target" value="0">
      <label for="t-0">Lose</label>
      <input name="t-1" type="radio" v-model="target" value="1">
      <label for="t-1">Keep</label>
      <input name="t-2" type="radio" v-model="target" value="2">
      <label for="t-2">Gain</label>
    </div>

    <h3>Your callories per day: {{ calories.toFixed() }} cal</h3>
    <h4>Protein {{ protein.min.toFixed() }}-{{ protein.max.toFixed() }} g</h4>
    <h4>Fat {{ fat.min.toFixed() }}-{{ fat.max.toFixed() }} g</h4>
    <h4>Catbs {{ carbs.min.toFixed() }}-{{ carbs.max.toFixed() }} g</h4>

    <button>
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

label {
  margin: 0 10px;
}
</style>