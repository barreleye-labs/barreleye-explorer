<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object],
    default: undefined
  },
  href: {
    type: [String, Object],
    default: undefined
  }
})

const { text, to, href } = toRefs(props)
</script>

<template>
  <NuxtLink v-if="to" tag="a" :to="to">
    <slot>{{ text }}</slot>
  </NuxtLink>

  <a v-else-if="href" :href="href">
    <slot>{{ text }}</slot>
  </a>
</template>
