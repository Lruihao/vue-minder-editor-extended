<template>
  <div id="app">
    <dev-test/>
<!--    <test-plugin/>-->
  </div>
</template>

<script>

// import TestPlugin from "./test/test-plugin";
import DevTest from "./test/dev-test";

export default {
  name: 'app',
  components: {
    DevTest,
    // TestPlugin
  }
}
</script>

<style>
  @import "./style/normalize.css";
</style>
