<template>
  <div class="si page">
    <h2>Конвертер SI</h2>
    
    <label>
      <span>Параметр</span> 
      <select v-model="selectedP">
        <option v-for="(item, index) in avalibleP" :key="index">
          {{ item }}
        </option>
      </select>

    </label>
    
    <label>
      <span>Значение</span> 
      <input type="number" v-model="X">
    </label>
    
    <label v-if="selectedP">
      <span>Единица</span> 
      <select v-model="selectedE">
        <option v-for="(item, index) in avalibleE[selectedP]" :key="index">
          {{ item }}
        </option>
      </select>
    </label>

    <button @click="convert">Конвертировать</button>
    
    <p>Решение: {{ resultF || 'нет результата' }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const avalibleP = ref(['время', 'растояние', 'скорость' ]);
  const selectedP = ref(null);
  const X = ref(null);
  const avalibleE = ref({
    время: ['сек', 'мин', 'час'], 
    растояние: ['см', 'дм', 'м', 'км'], 
    скорость: ['км/ч', 'м/с'] 
  });
  const selectedE = ref(null);
  const resultF = ref(null);


  function convert() {

  }


</script>

<style lang="scss">

</style>