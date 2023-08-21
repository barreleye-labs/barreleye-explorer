<script setup lang="ts">
import type { Props } from './types'

const props = defineProps<Props>()

const { dataSource, columns, loading, size } = props
</script>

<template>
  <div>
    <a-table
      :pagination="false"
      :data-source="dataSource"
      :columns="columns"
      :loading="loading"
      :size="size"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep(.ant-table-thead > tr > th){
  font-size: 11px;
  font-weight: 400;
  text-align: center;
}

:deep(.ant-table-tbody > tr > td){
  font-size: 11px;
}
</style>
