<script lang="ts" setup>
import { ref } from 'vue'
import type { SelectProps } from 'ant-design-vue'

const value = ref('lucy')

const options = ref<SelectProps['options']>([
  {
    value: 'jack',
    label: 'Jack'
  },
  {
    value: 'lucy',
    label: 'Lucy'
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true
  },
  {
    value: 'yiminghe',
    label: 'Yiminghe'
  }
])

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
</script>

<template>
  <a-select
    ref="select"
    v-model:value="value"
    :options="options"
    @change="handleChange"
  />
</template>
