<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    {{ title }}

    <slot name="items" />
  </div>
</template>
