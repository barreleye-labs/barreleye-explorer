<script setup lang="ts">
import { dataSource, columns } from '../constants/tableInfo'
</script>

<template>
  <div class="card-wrapper">
    <div class="card-separate">
      <a-card title="Block Number" />

      <a-card title="BLOCKS">
        <template #extra>
          <nuxt-link to="/blocks">
            more
          </nuxt-link>
        </template>
        <BaseTable :data-source="dataSource" :columns="columns" size="small" />
      </a-card>
    </div>

    <a-card title="TRANSACTIONS">
      <template #extra>
        <nuxt-link to="/tokens">
          more
        </nuxt-link>
      </template>
      <BaseTable :data-source="dataSource" :columns="columns" size="small" />
    </a-card>
  </div>
</template>

<style lang="scss" scoped>
.ant-card{
  min-height: 500px;
}
.card-wrapper{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;

  .card-separate{
    display: flex;
    gap: 10px;
    > div:nth-child(1){
      flex: 0.3
    }
    > div:nth-child(2){
      flex: 0.7
    }
  }
}

:deep(.ant-card-body){
  padding: 0 !important;
}

</style>
