<script setup lang='ts'>
interface Props {
  caption: string,
  calories: number,
  protein: number,
  fat: number,
  carbs: number
}

const { caption, calories, protein, fat, carbs } = defineProps<Props>();
</script>

<template>
  <table>
    <caption>{{ caption }}</caption>
    <tbody>
      <tr>
        <td>К</td>
        <td>{{ calories.toFixed() }}</td>
      </tr>
      <tr>
        <td>Б</td>
        <td>{{ protein.toFixed() }}</td>
      </tr>
      <tr>
        <td>Ж</td>
        <td>{{ fat.toFixed() }}</td>
      </tr>
      <tr>
        <td>У</td>
        <td>{{ carbs.toFixed() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
td {
  width: 50px;
  text-align: center;
}
</style>