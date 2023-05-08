<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :title="title" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  setup() {
    const title = ref<string>("vue3标题");
    const count = ref<number>(1);
    const obj = reactive({ count });
    console.log(obj.count === count.value);
    count.value++;
    console.log(obj.count);
    console.log(count.value);
    obj.count++;
    console.log(obj.count);
    console.log(count.value);
    const books = reactive([ref("Vue 3 Guide")]);
    console.log(books[0].value);
    const map = reactive(new Map([["count", ref(0)]]));
    // console.log(map.get("count").value);
    console.log(obj.count); // 1
    console.log(obj.count === count.value); // true
    onMounted(() => {
      document.title = 'vue3练习'
    })
    return { title };
  },
});
</script>

<style scoped></style>
