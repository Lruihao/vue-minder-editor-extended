<template>
  <div id="app">
    <minder-editor/>
<!--    <test-plugin/>-->
  </div>
</template>

<script>

import Vue from 'vue'
import minderEditor from "./components/plugin";
Vue.use(minderEditor) //开发测试

import TestPlugin from "./test/test-plugin"; //打包测试

export default {
  name: 'app',
  components: {TestPlugin}
}
</script>

<style>
  @import "./style/normalize.css";
</style>
