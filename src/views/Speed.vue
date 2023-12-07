<template>
  <div class="speed page">
    <h2>Скорость и ускорение</h2>

    <label>
      <span>Скорость</span> 
      <input type="number" v-model="V">
    </label>
    
    <label>
      <span>Расстояние</span> 
      <input type="number" v-model="S">
    </label>
    
    <label>
      <span>Время</span> 
      <input type="number" v-model="T">
    </label>
    
    <button @click="calculate">Посчитать</button>
    
    <p>Решение: {{ result || 'нет результата' }}</p>

    <label>
      <span>delta Скорости</span> 
      <input type="number" v-model="dV">
    </label>
    
    <label>
      <span>delta Времени</span> 
      <input type="number" v-model="dT">
    </label>
    
    <label>
      <span>Ускорение</span> 
      <input type="number" v-model="a">
    </label>
    
    <button @click="calculateForcage">Посчитать</button>
    
    <p>Решение: {{ resultF || 'нет результата' }}</p>

  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const V = ref(null);
  const dV = ref(null);
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
    if (!dV.value && S2.value && dT.value) {
      resultF.value = (S2.value / dT.value).toFixed(2);
    } else if (dV.value && !S2.value && dT.value) {
      resultF.value = (dV.value * dT.value).toFixed(2);
    } else if (dV.value && S2.value && !dT.value) {
      resultF.value = (S2.value / dV.value).toFixed(2);
    } else {
      resultF.value = 'Некорректные данные';
    };
  }


</script>

<style lang="scss" scoped>


</style>
