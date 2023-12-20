<template>
  <div class="si page">
    <h2>Конвертер SI</h2>
    
    <label>
      <span>Параметр</span> 
      <select v-model="selectedP" @change="resultF = null; X = null">
        <option v-for="(item, index) in avalibleP" :key="index">
          {{ item }}
        </option>
      </select>
    </label>
    
    <label v-if="selectedP">
      <span>Единица</span> 
      <select v-model="selectedE" @change="convert()">
        <option v-for="(item, index) in avalibleE[selectedP]" :key="index">
          {{ item }}
        </option>
      </select>
    </label>
    
    <label>
      <span>Значение</span> 
      <input min="0" type="number" v-model="X" @input="convert()">
    </label>

    <!-- <button @click="convert" :disabled="!selectedP || !selectedE || !X">Конвертировать в SI</button> -->
    
    <p>Результат: {{ resultF || 'нет результата' }}</p>
  </div>
</template>

<script setup>
  import { reactive, ref, watch } from 'vue';

  const avalibleP = ref(['время', 'расстояние', 'скорость' ]);
  const selectedP = ref(null);
  const X = ref(null);
  const avalibleE = reactive({
    время: ['мин', 'час'], 
    расстояние: ['мм', 'см', 'дм', 'км'], 
    скорость: ['км/ч'] 
  });
  const selectedE = ref(null);
  const resultF = ref(null);


  function convert() {
    if (!selectedP.value || !selectedE.value || !X.value) {
      resultF.value = null;
      return
    };

    switch (selectedP.value) {
      case 'время':
        switch (selectedE.value) {
          // case 'сек':
          //   resultF.value = X.value + ' секунд'
          //   break;
          case 'мин':
            resultF.value = X.value*60 + ' секунд'
            break;
          case 'час':
            resultF.value = X.value*3600 + ' секунд'
            break;
        
          default:
            break;
        }
        break;
   
      case 'расстояние':
        switch (selectedE.value) {
          case 'мм':
            resultF.value = X.value/1000 + ' метров'
            break;
          case 'см':
            resultF.value = X.value/100 + ' метров'
            break;
          case 'дм':
            resultF.value = X.value/10 + ' метров'
            break;
          // case 'м':
          //   resultF.value = X.value + ' метров'
          //   break;
          case 'км':
            resultF.value = X.value*1000 + ' метров'
            break;
        
          default:
            break;
        }
      break;
  
      case 'скорость':
        switch (selectedE.value) {
          case 'км/ч':
            resultF.value = X.value/3.6 + ' м/с'
            break;
          // case 'м/с':
          //   resultF.value = X.value + ' м/с'
          //   break;
        
          default:
            break;
        }
        break;
    
      default:
        break;
    }
  }

  watch(selectedP, () => {
    console.log(selectedP.value)
    if (selectedP.value === 'скорость') {
      selectedE.value = 'км/ч'
    }
  },{ deep: true })



</script>

<style lang="scss">

</style>