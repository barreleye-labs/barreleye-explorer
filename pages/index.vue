<script setup lang="ts">
import { dataSource, columns } from '../constants/tableInfo'

const {
  data: response,
  pending,
  error,
  refresh
} = await useAsyncData('mountains', () =>
  $fetch('http://localhost:3000/products')
)

console.log(response)
</script>

<template>
  <div class="card-wrapper">
    <div class="card-separate">
      <a-card title="Block Number" />

      <a-card title="BLOCKS">
        <template #extra>
          <NuxtLink to="/blocks">
more
</NuxtLink>
        </template>
        <BarreleyeTable
          :data-source="dataSource"
          :columns="columns as []"
          size="small"
        />
      </a-card>
    </div>

    <a-card title="TRANSACTIONS">
      <template #extra>
        <NuxtLink to="/tokens">
more
</NuxtLink>
      </template>
      <BarreleyeTable
        :data-source="dataSource"
        :columns="columns as []"
        size="small"
      />
    </a-card>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  .card-separate {
    display: flex;
    gap: 10px;
    > div:nth-child(1) {
      flex: 0.3;
    }
    > div:nth-child(2) {
      flex: 0.7;
    }
  }
}

:deep(.ant-card-body) {
  padding: 0 !important;
}
</style>
