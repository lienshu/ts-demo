<template>
  <div class="home">
    <HelloWorld :title-message="title" />
    <EventEmit @eventEmit="onEventEmit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import EventEmit from "./Home/$event-emit.vue"

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,EventEmit
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
    const onEventEmit = (val: any, secVal: any) => {
      console.log(val, secVal);
    }
    onMounted(() => {
      document.title = 'vue3练习'
    })
    return { title, onEventEmit };
  },
});
</script>

<style scoped></style>
