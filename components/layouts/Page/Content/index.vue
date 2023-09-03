<template>
  <a-layout class="layout-contents">
    <Header />

    <a-layout-content><slot /></a-layout-content>

    <Footer />
  </a-layout>
</template>

<style lang="scss" scoped>
.layout-contents {
  padding: 1rem 2rem;
  display: flex;
  height: 100vh;
  flex-direction: column;
  max-width: 73%;
  gap: 2rem;
  margin: 0 auto;
  overflow: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  @media screen and (max-width: 991px) {
    max-width: 96%;
  }

  .ant-layout-header {
    flex: 0.1;
    background-color: transparent;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-layout-content {
    flex: 0.9;
    overflow: scroll;
  }

  .ant-layout-footer {
    flex: 0.1;
  }
}

.layout-contents::-webkit-scrollbar {
  display: none;
}

.ant-layout {
  background-color: transparent;
}
</style>
