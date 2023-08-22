<script setup lang="ts">
import { dataSource, columns } from '../constants/tableInfo'
</script>

<template>
  <div>
    <RouteTable :data-source="dataSource" :columns="columns" />
  </div>
</template>
