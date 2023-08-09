import { createApp } from "vue";
import Antd from "ant-design-vue"
import 'ant-design-vue/dist/reset.css';
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css"

createApp(App).use(router).use(Antd).mount("#app");
