<script setup lang="ts">
import { ref } from 'vue'

const loading = ref<boolean>(false)

const onClick = () => {
  loading.value = true
}
</script>

<template>
  <div>
    <p>antd import example page</p>
    <BarreleyeButton type="default" size="middle" :loading="loading" @click="onClick">
      button
    </BarreleyeButton>
  </div>
</template>
