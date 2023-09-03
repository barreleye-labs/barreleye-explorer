<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div>
    <div class="card-title">
      <p class="left">
        <slot name="icon" />
        <span class="title">{{ title }}</span>
        <span class="description">{{ description }}</span>
      </p>

      <p class="right">
        <slot name="extra" />
      </p>
    </div>

    <a-divider />
  </div>
</template>

<style lang="scss" scoped>
.card-title {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    gap: 4px;
    align-items: center;
    font-weight: bold;

    :deep(.anticon) {
      color: #00d695;
      font-size: 23px;
    }
    .title {
      font-weight: 300;
      margin-right: 8px;
    }
  }

  .right {
    display: flex;
  }
}

.ant-divider {
  margin: 19px 0;
}
</style>
