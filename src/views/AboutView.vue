<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      <component :is="tabs[currentTab]">{{ tab }}</component>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import AboutViewHead from './About/AboutViewHead.vue'
import AboutViewWrap from './About/AboutViewWrap.vue'
import AboutViewFooter from './About/AboutViewFooter.vue'

const tabs = {
  AboutViewHead,
  AboutViewWrap,
  AboutViewFooter
}

const currentTab = ref('AboutViewHead')

const changeComponent = () => {

}
</script>

<style lang="scss" scoped>

</style>