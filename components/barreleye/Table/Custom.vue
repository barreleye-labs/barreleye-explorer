<script setup lang="ts">
import { getRoutePathSplit } from '@/utils/routeUtil'
import type { Props } from './types'

const props = defineProps<Props>()

const { dataSource, columns } = props
</script>

<template>
  <a-table
    :scroll="{ x: 500 }"
    :pagination="true"
    :data-source="dataSource"
    :columns="columns"
  >
    <template #title>
      {{ getRoutePathSplit(1) }}
    </template>

    <template #bodyCell="{ column, text }">
      <slot name="bodyCell" :column="column" :text="text" />
    </template>
  </a-table>
</template>

<style lang="scss" scoped>
:deep(.ant-table) {
  padding-bottom: 2rem;
  border-radius: 9px;
  height: 70vh;
}
:deep(.ant-table-thead > tr > th) {
  font-size: 11px;
  font-weight: 400;
  text-align: center;
}

:deep(.ant-table-tbody > tr > td) {
  font-size: 11px;
}
</style>
