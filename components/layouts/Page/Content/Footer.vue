<template>
  <a-layout-footer>
    <div class="footer-top">
      <BarreleyeLogo path="/" color="black" />
      <span>Barreleye Labs ©2023 Created by KNYM</span>
    </div>

    <a-divider />

    <div class="footer-icons">
      <span class="footer-icon">
        <GithubOutlined />
      </span>
      <span class="footer-icon">
        <LinkedinOutlined />
      </span>
    </div>
  </a-layout-footer>
</template>

<style lang="scss" scoped>
.footer-top {
  display: flex;
  align-items: flex-end;
  span {
    color: #626262;
    font-size: 10px;
    font-weight: 200;
    margin-left: 9px;
  }
}

.logo {
  font-size: 16px;
}
.ant-layout-footer {
  background-color: transparent;
  padding: 0;
}

.ant-divider-horizontal {
  margin: 6px 0;
}

.footer-icons {
  .footer-icon {
    float: right;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(157 157 157 / 25%);
    border-radius: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-left: 3px;
    transition: background 300ms;
    &:hover {
      background: black;
    }
    .anticon {
      color: rgb(255 255 255 / 92%);
      font-size: 18px;
    }
  }
}
</style>
