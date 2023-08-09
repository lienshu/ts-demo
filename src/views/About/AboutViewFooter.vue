<template>
  <div class="text-lg">
    About View Footer
    <a-select
      ref="select"
      v-model:value="value1"
      style="width: 120px"
      @focus="focus"
      @change="handleChange"
    >
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="disabled" disabled>Disabled</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('lucy');
const focus = () => {
  console.log('focus');
};
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
</script>

<style lang="scss" scoped>

</style>