<script setup lang="ts">
type TableSize = 'middle' | 'small' | 'large'

export interface Props {
  dataSource: any[]
  columns: []
  pagination?: boolean
  loading?: boolean
  size?: TableSize
}
const props = defineProps<Props>()

const { dataSource, columns, loading, size } = props
</script>

<template>
  <a-table
    :pagination="false"
    :scroll="{ x: 500 }"
    :data-source="dataSource"
    :columns="columns"
    :loading="loading"
    :size="size"
  />
</template>

<style lang="scss" scoped>
:deep(.ant-table-thead > tr > th) {
  font-size: 11px;
  font-weight: 400;
  text-align: center;
}

:deep(.ant-table-tbody > tr > td) {
  font-size: 11px;
}
</style>
