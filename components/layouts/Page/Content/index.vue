<template>
  <a-layout class="layout-contents">
    <Header />

    <a-layout-content><slot /></a-layout-content>

    <Footer />
  </a-layout>
</template>

<style lang="scss" scoped>
.layout-contents{
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  max-width: 73%;
  margin: 0 auto;

  @media screen and (max-width: 991px ) {
    max-width: 96%;
  }

  .ant-layout-header{
    background-color: transparent;
    padding: 0;
    display: flex;
    flex: 0.1;
    align-items: center;
    justify-content: center;
  }

  .ant-layout-content{
    flex: 0.9;
  }
}

.ant-layout{
  background-color: transparent;

}
</style>
