<script setup lang="ts">
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue'

defineProps({
  type: {
    type: String,
    default: 'left'
  },

  to: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <BarreleyeLink v-if="type === 'left'" :to="to">
      <LeftOutlined />
    </BarreleyeLink>

    <BarreleyeLink v-if="type === 'right'" :to="to">
      <RightOutlined />
    </BarreleyeLink>
  </div>
</template>

<style lang="scss" scoped>
a {
  padding: 3px 4px;
  border: 1px solid;
  border-radius: 4px;
  margin: 0 1px;
  font-size: 10px;
}
</style>
