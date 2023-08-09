<template>
  <div class="text-2xl w-12">
    About View Head
    <a-input v-model:value="value" placeholder="Basic usage" class="input"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref<string>('')
</script>

<style scoped>
.input {
  width: 200px;
}
</style>