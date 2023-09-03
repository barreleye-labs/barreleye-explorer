<script setup lang="ts">
defineProps({
  label: {
    type: [String, Number],
    default: ''
  },
  content: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <div class="item">
    <span class="label">{{ label }}</span>
    <p class="content">
      <slot>{{ content }}</slot>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  margin-bottom: 1.4rem;

  .label {
    color: #9699b2;
    font-weight: 700;
    max-width: 140px;
    flex: 0.4;
    font-family: Roboto;
  }

  .content {
    flex: 0.6;
  }

  .label,
  .content {
    font-size: 13px;
  }
}
</style>
