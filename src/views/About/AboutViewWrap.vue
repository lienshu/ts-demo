<template>
  <div class="text-base">
    About View Wrap
    <a-radio v-model:checked="checked">Radio</a-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref<boolean>(false);
</script>

<style lang="scss" scoped>

</style>