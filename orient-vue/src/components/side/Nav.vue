<template>
  <div id="navbar">
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      background-color="#faf2f2"
      text-color="#fff"
      active-text-color="#e79cc2"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">评估分析</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
#navbar{
  height: 100%;
  width: 200px;
}
.el-menu{
  height: 100%;
}
</style>