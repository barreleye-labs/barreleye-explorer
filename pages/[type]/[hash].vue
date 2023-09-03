<script setup lang="ts">
import { BlockOutlined } from '@ant-design/icons-vue'
import { getRoutePathSplit } from '@/utils/routeUtil'

import { dataSource, columns } from '@/constants/tableInfo'

const activeKey = ref('1')
</script>

<template>
  <div class="block">
    <BarreleyeCard>
      <BarreleyeCardTitle
        :title="getRoutePathSplit(1)"
        :description="getRoutePathSplit()"
      >
        <template #icon>
          <BlockOutlined />
        </template>

        <template #extra>
          <BarreleyeLinkArrow type="left" :to="getRoutePathSplit()" />
          <BarreleyeLinkArrow type="right" :to="getRoutePathSplit()" />
        </template>
      </BarreleyeCardTitle>

      <BarreleyeCardContent>
        <BarreleyeDescription>
          <template #items>
            <BarreleyeDescriptionItem
              :label="'Time'"
              :content="'1 hour ago(Sep 02, 2023 14:07:06 / Local)'"
            />
            <BarreleyeDescriptionItem
              :label="'Hash'"
              :content="'0xa166de94af6e893ba016d6156cfef2059b0aeb6dc597b7d35ac4804ec2826'"
            />
            <BarreleyeDescriptionItem
              :label="'Parent Hash'"
              :content="'0xa166de94af6e893ba016d6156cfef2059b0aeb6dc597b7d35ac4804ec2826'"
            />
            <BarreleyeDescriptionItem :label="'Total TXs'" :content="'2 TXs'" />
            <BarreleyeDescriptionItem
              :label="'Block Reward'"
              :content="'6.4KLAY'"
            />
            <BarreleyeDescriptionItem
              :label="'Block Size'"
              :content="'3,389 bytes'"
            />
            <BarreleyeDescriptionItem
              :label="'Base Fee'"
              :content="'0.000000025KLAY(25ston)'"
            />
            <BarreleyeDescriptionItem
              :label="'Burnt Fees'"
              :content="'🔥 0.0032901KLAY'"
            />
          </template>
        </BarreleyeDescription>
      </BarreleyeCardContent>
    </BarreleyeCard>

    <BarreleyeCard>
      <a-tabs v-model:activeKey="activeKey" size="large">
        <a-tab-pane key="1" tab="Transactions">
          <BarreleyeTable :data-source="dataSource" :columns="columns" />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Internal Transactions">
          <BarreleyeTable :data-source="dataSource" :columns="columns" />
        </a-tab-pane>
        <a-tab-pane key="3" tab="Raw Data">
          <BarreleyeTable :data-source="dataSource" :columns="columns" />
        </a-tab-pane>
      </a-tabs>
    </BarreleyeCard>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
