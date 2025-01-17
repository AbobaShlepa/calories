<script setup lang='ts'>
import { compile, computed, ref } from 'vue';

const gender = ref('male');
const age = ref(0);
const weight = ref(0);
const height = ref(0);
const activityLevel = ref(0);
const target = ref(0);

interface IDictionary {
  [id: number]: number
}

const activityMap: IDictionary = {
  [0]: 1.2,
  [1]: 1.375,
  [2]: 1.55,
  [3]: 1.7,
  [4]: 1.9
}

const targetMap: IDictionary = {
  [0]: 0.9,
  [1]: 1,
  [2]: 1.1
}

const calories = computed(() => {
  const constantValue = gender.value === 'male' ? 5 : -161;
  return ((10 * weight.value) + (6.25 * height.value) - (5 * age.value) + constantValue) * activityMap[activityLevel.value] * targetMap[target.value]
})

const protein = computed(() => {
  return {
    min: weight.value * 1.6,
    max: weight.value * 2.2,
  }
})

const fat = computed(() => {
  return {
    min: weight.value * 0.8,
    max: weight.value * 1
  }
})

const carbs = computed(() => {
  return {
    min: (calories.value - protein.value.min * 4.1 - fat.value.min * 9.3) / 4,
    max: (calories.value - protein.value.max * 4.1 - fat.value.max * 9.3) / 4
  }
})
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