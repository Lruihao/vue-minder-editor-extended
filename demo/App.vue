<template>
  <div id="app">
    <dev-test/>
<!--    <test-plugin/>-->
<!--    <ms-test />-->
  </div>
</template>

<script>

// import TestPlugin from "./test/test-plugin";
// import MsTest from "./test/ms-test";
import DevTest from "./test/dev-test";

export default {
  name: 'app',
  components: {
    // MsTest,
    DevTest,
    // TestPlugin
  }
}
</script>

<style>
  /*没必要清楚默认样式，根据实际项目决定
  @import "./style/normalize.css";
  */
</style>
