<template>
  <div id="app">
<!--    <dev-test/>-->
<!--    <test-plugin/>-->
    <ms-test />
  </div>
</template>

<script>

// import TestPlugin from "./test/test-plugin";
import MsTest from "./test/ms-test";
import DevTest from "./test/dev-test";

export default {
  name: 'app',
  components: {
    MsTest,
    DevTest,
    // TestPlugin
  }
}
</script>

<style>
  @import "./style/normalize.css";
</style>
