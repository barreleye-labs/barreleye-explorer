<script setup lang="ts">
const onCollapse = (collapsed: boolean, type: string) => {
  // console.log(collapsed, type)
}

const onBreakpoint = (broken: boolean) => {
  // console.log(broken)
}

</script>

<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    class="layout-sider"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <BarreleyeLogo path="/" class="sider-logo" />

    <Menu />
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.layout-sider{
  height:100vh;
}
.nav-text{
  color: #ffffffb3;
  letter-spacing: -1px;
}

.sider-logo{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
}

</style>
