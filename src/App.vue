<template>
  <div class="container">
    <h1>Давына физика</h1>

    <span>Скорость</span>
    <input type="number" v-model="V">
    
    <span>Расстояние</span>
    <input type="number" v-model="S">
    
    <span>Время</span>
    <input type="number" v-model="T">
    
    
    <button @click="calculate">Посчитать</button>
    
    <p>Решение: {{ result || 'нет результата пока' }}</p>
    
    <span>Начальная скорость</span>
    <input type="number" v-model="V0">
    
    <span>Скорость в моменте</span>
    <input type="number" v-model="V1">

    <span>delta Времени</span>
    <input type="number" v-model="dT">
    
    <span>Ускорение</span>
    <input type="number" v-model="a">
    
    <button @click="calculateForcage">Посчитать</button>
    
    <p>Решение: {{ resultF || 'нет результата пока' }}</p>

  </div>
</template>

<script setup>
import { ref } from 'vue';

const V = ref(null);
const V0 = ref(null);
const V1 = ref(null);
const S = ref(null);
const T = ref(null);
const dT = ref(null);
const a = ref(null);

const result = ref(null);
const resultF = ref(null);

function calculate() {
  if (!V.value && S.value && T.value) {
    result.value = (S.value / T.value).toFixed(2);
  } else if (V.value && !S.value && T.value) {
    result.value = (V.value * T.value).toFixed(2);
  } else if (V.value && S.value && !T.value) {
    result.value = (S.value / V.value).toFixed(2);
  } else {
    result.value = 'Некорректные данные';
  };
}

function calculateForcage() {
  resultF.value = ((V1.value - V0.value) / dT.value)
}




</script>

<style scoped>
 .container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
 }
</style>
