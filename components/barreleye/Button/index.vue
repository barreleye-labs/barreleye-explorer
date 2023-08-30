<script lang="ts" setup>
import { toRefs } from 'vue'
import type { Props, Emits } from './types'

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
