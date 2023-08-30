<script lang="ts" setup>

</script>

<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <a-layout>
      <Sider />

      <Content>
        <slot />
      </Content>
    </a-layout>
  </ClientOnly>
</template>
