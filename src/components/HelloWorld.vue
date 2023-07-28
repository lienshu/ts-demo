<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    {{ head }}
    <div>测试测试测试branch-commit-checkout-commit</div>
    <div>feature/dev分支2222</div>
    <button @click="changeValue">更改父组件的值</button>
  </div>
</template>

<!-- <script lang="ts" setup>
const props = defineProps({msg: String})
console.log(props)
</script> -->
<script lang="ts">
import { ref, toRef, toRefs } from "vue";
export default {
  props: {
    title: String
  },
  emits:['update: title'],
  setup(props:any,commit:any) {
    console.log(props);
    const head = ref<string>(props.title)
    // const title = toRef(props,'title')
    // const { title } = toRefs(props);
    // console.log(title.value)
    const changeValue = () => {
      console.log('1111')
      commit.emit('update:title', 'Baybay')
    }
    return {head,changeValue};
    // return { title };
  },
};
</script>

<style scoped></style>
