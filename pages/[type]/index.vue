<script setup lang="ts">
import { dataSource, columns } from '@/constants/tableInfo'
</script>

<template>
  <BarreleyeTableCustom :data-source="dataSource" :columns="columns">
    <template #bodyCell="{ column, text: path }">
      <template v-if="column.dataIndex === 'block'">
        <BarreleyeLink :to="`${$route.path}/${path}`">
          {{ path }}
        </BarreleyeLink>
      </template>
    </template>
  </BarreleyeTableCustom>
</template>
