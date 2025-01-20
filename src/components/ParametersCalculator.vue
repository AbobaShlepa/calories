<script setup lang='ts'>
import usePersonsStore from '@/stores/persons';
import { storeToRefs } from 'pinia';

const personStore = usePersonsStore();
const { calories, protein, fat, carbs } = storeToRefs(personStore);
</script>

<template>
  <div class="wrapper">
    <div class="form-item">
      <input name="age" v-model="personStore.person.age" type="number" />
      <label for="age">Возраст</label>
    </div>
    <div class="form-item">
      <input name="gender-male" type="radio" v-model="personStore.person.gender" value="male" checked />
      <label for="gender-male">Муж</label>
      <input name="gender-female" type="radio" v-model="personStore.person.gender" value="female" />
      <label for="gender">Жен</label>
    </div>
    <div class="form-item">
      <input name="weight" type="number" v-model="personStore.person.weight" />
      <label for="weight">Вес (кг)</label>
    </div>
    <div class="form-item">
      <input name="height" type="number" v-model="personStore.person.height" />
      <label for="height">Рост (см)</label>
    </div>
    <div class="form-item">
      Уровень активности:
      <br />
      <input name="al-0" type="radio" v-model="personStore.person.activityLevel" value="0" />
      <label for="al-0">Минимальный</label>
      <input name="al-1" type="radio" v-model="personStore.person.activityLevel" value="1" />
      <label for="al-1">Слабый</label>
      <input name="al-2" type="radio" v-model="personStore.person.activityLevel" value="2" />
      <label for="al-2">Средний</label>
      <input name="al-3" type="radio" v-model="personStore.person.activityLevel" value="3" />
      <label for="al-325">Высокий</label>
      <input name="al-4" type="radio" v-model="personStore.person.activityLevel" value="4" />
      <label for="al-4">Экстремальный</label>
    </div>
    <div>
      Цель:
      <br />
      <input name="t-0" type="radio" v-model="personStore.person.target" value="0" />
      <label for="t-0">Похудение</label>
      <input name="t-1" type="radio" v-model="personStore.person.target" value="1" />
      <label for="t-1">Удержание</label>
      <input name="t-2" type="radio" v-model="personStore.person.target" value="2" />
      <label for="t-2">Набор</label>
    </div>

    <h3>Норма калорий в день: {{ calories.toFixed() }} кал</h3>
    <h4>Белки {{ protein.toFixed() }} г</h4>
    <h4>Жиры {{ fat.toFixed() }} г</h4>
    <h4>Углеводы {{ carbs.toFixed() }} г</h4>
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