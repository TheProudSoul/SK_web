<template>
  <transition mode="out-in">
      <router-view></router-view>
    </transition>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  font-size: 15px;
  overflow: hidden auto;
}
/* CSS */
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", Arial, sans-serif;
}
</style>
