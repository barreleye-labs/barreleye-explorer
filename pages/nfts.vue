<script setup lang="ts">
import { dataSource, columns } from '../constants/tableInfo'
</script>

<template>
  <div>
    <BarreleyeTableCustom :data-source="dataSource" :columns="columns" />
  </div>
</template>
