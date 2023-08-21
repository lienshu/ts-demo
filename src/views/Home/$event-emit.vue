<template>
  <div>
    <a-button type="primary" ghost @click="pressEnter">Primary</a-button>
    <a-input class="input" :value="value" @input="value = $event.target.value" placeholder="Basic usage" />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
  const emit = defineEmits(['eventEmit'])
  const pressEnter = () => {
    emit('eventEmit', '子组件')
  }
  const value = ref<string>('')
  const onInput = (e: any) => {
    // console.log(val,'val')
    console.log(e.target.value, 'e')
    value.value = e.target.value
  }
</script>

<style scoped>
.input {
  width: 200px;
}
</style>