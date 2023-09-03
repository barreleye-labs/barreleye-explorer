<script setup lang="ts"></script>

<template>
  <a-card><slot /> </a-card>
</template>

<style lang="scss" scoped>
:deep(.ant-card-body) {
  overflow-wrap: anywhere;
}
</style>
