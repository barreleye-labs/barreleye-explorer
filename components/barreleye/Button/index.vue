<script lang="ts" setup>
import { toRefs } from 'vue'
import { ButtonSize, ButtonType } from 'ant-design-vue/es/button'

export interface Props {
  loading?: boolean
  size?: ButtonSize
  type?: ButtonType
}

export interface Emits {
  (e: 'click'): void
}
const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const { loading, size, type } = toRefs(props)

const onClick = () => {
  emits('click')
}
</script>

<template>
  <a-button :type="type" :size="size" :loading="loading" @click="onClick">
    <slot />
  </a-button>
</template>
