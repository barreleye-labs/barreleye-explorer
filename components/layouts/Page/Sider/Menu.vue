<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { navItems } from '@/constants/nav'

const router = useRouter()
const route = useRoute()

const selectedKeys = ref<navItems[]>([''])

const onClick = ({ key }) => router.push({ path: `/${key}` })

watch(
  () => route.path,
  path => (selectedKeys.value = [path.split('/')[1]]),
  { immediate: true }
)
</script>

<template>
  <div class="layout-menu">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      :items="navItems"
      @click="onClick"
    />
  </div>
</template>

<style lang="scss" scoped>
.layout-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
