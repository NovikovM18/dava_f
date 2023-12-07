<template>
  <div id="main">
    <div class="nav">
      <router-link to="/dava_f/si">Конвертер Si</router-link>
      <router-link to="/dava_f/speed">Скорость</router-link>
    </div>

    <h1>Давына физика</h1>

    <router-view />
  </div>
</template>

<script setup>
</script>

<style lang="scss">
  #main {
    .nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }
  }
</style>