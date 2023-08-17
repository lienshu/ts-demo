<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(_, tab) in tabs" :key="tab" @click="currentTab = tab">
      <component :is="tabs[currentTab]">{{ tab }}</component>
    </div>
    <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 24 }"
    :wrapper-col="{ span: 4 }"
    autocomplete="off"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" @pressEnter="pressEnter" />
    </a-form-item>
    <a-form-item
      label="en_username"
      name="en_username"
      :rules="[{ required: true, message: 'Please input your en_username!' }]"
    >
      <a-input v-model:value="formState.en_username" />
    </a-form-item>
  </a-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { pinyin } from 'pinyin-pro';
import { capitalize, toString, join } from 'lodash';
import AboutViewHead from './About/AboutViewHead.vue';
import AboutViewWrap from './About/AboutViewWrap.vue';
import AboutViewFooter from './About/AboutViewFooter.vue'

interface FormState {
  username: string;
  en_username: string;
}

const formState = ref<FormState>({
  username: '',
  en_username: '',
});

const tabs = {
  AboutViewHead,
  AboutViewWrap,
  AboutViewFooter
}

const currentTab = ref('AboutViewHead')

const convertToPinyin = (text = "", mode = "normal") => {
  const arr = pinyin(text, {
    mode: 'normal',
    toneType: "none",
    removeNonZh: true,
    nonZh: "removed",
    type: 'array'
  })
  if (!arr) return ''
  return capitalize(join(arr, ''));
}

const a = ref<{name: string, address: string}>({name: '张三', address: '北京'})

const pressEnter = () => {
  const {username} = formState.value
  formState.value = { ...formState.value, en_username: convertToPinyin(username) }
  // console.log({...})
  console.log(formState.value, 'formState.value')
  console.log(formState.value.username, formState.value.en_username)

  a.value = {...a.value, name: '李四' }
  console.log(a, 'a')
}
</script>

<style lang="scss" scoped>

</style>