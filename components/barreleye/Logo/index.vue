<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  path: String,
  color?: String
}

const props = defineProps<Props>()

const getLogoClass = computed(() => {
  const { color } = props
  return [
    {
      color
    }
  ]
})
</script>

<template>
  <RouterLink
    :to="props.path"
    class="logo"
    :style="getLogoClass"
  >
    Barreleye&nbsp;<span>Explorer</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo{

  font-size: 18px;

  color: white;
  font-weight: 600;
  > span{
    font-weight: 100;
  }
}

</style>
