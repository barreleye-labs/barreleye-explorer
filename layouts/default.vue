<script lang="ts" setup>

</script>

<template>
  <ClientOnly fallback-tag="span" fallback="Loading comments...">
    <a-layout>
      <LayoutSider />

      <LayoutContent>
        <slot />
      </LayoutContent>
    </a-layout>
  </ClientOnly>
</template>
