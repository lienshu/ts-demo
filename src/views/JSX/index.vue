<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const message = ref('vue-cli结合jsx写法')
    return () => {
      <div>
        {message.value}
      </div>
    }
  }
})

</script>

<style lang="scss" scoped>

</style>